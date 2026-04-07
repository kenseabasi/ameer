const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = 5000;
const USERS_FILE = path.join(__dirname, 'users.json');

// Helper functions
function readUsers() {
  try {
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([]));
      return [];
    }
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  } catch (error) {
    console.error('Error reading users file:', error);
    return [];
  }
}

function writeUsers(users) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error writing users file:', error);
  }
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(password + 'nileshop-salt').digest('hex');
}

function generateToken(userId) {
  return crypto.createHash('sha256').update(userId + Date.now().toString() + 'secret').digest('hex');
}

function parseJSON(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    return null;
  }
}

// CORS headers
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
  };
}

// Server
const server = http.createServer((req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200, corsHeaders());
    res.end();
    return;
  }

  // Set CORS headers for all responses
  Object.entries(corsHeaders()).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const url = req.url;
    const method = req.method;

    // Registration endpoint
    if (url === '/api/auth/register' && method === 'POST') {
      const data = parseJSON(body);
      if (!data) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
        return;
      }

      const { fullName, matricNumber, email, password } = data;

      if (!fullName || !matricNumber || !email || !password) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'All fields required' }));
        return;
      }

      if (password.length < 8) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Password must be at least 8 characters' }));
        return;
      }

      const users = readUsers();

      // Check if user exists
      const existingUser = users.find(u => u.email === email || u.matricNumber === matricNumber);
      if (existingUser) {
        res.writeHead(400);
        res.end(JSON.stringify({
          message: existingUser.email === email ? 'Email already registered' : 'Matric number already registered'
        }));
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        fullName,
        matricNumber,
        email,
        password: hashPassword(password),
        verified: false,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      writeUsers(users);

      const token = generateToken(newUser.id);

      res.writeHead(201);
      res.end(JSON.stringify({
        message: 'Registration successful',
        token,
        user: {
          id: newUser.id,
          fullName: newUser.fullName,
          matricNumber: newUser.matricNumber,
          email: newUser.email,
          verified: newUser.verified
        }
      }));
      return;
    }

    // Login endpoint
    if (url === '/api/auth/login' && method === 'POST') {
      const data = parseJSON(body);
      if (!data) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
        return;
      }

      const { email, password } = data;
      const users = readUsers();

      const user = users.find(u => u.email === email || u.matricNumber === email);
      if (!user || user.password !== hashPassword(password)) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid credentials' }));
        return;
      }

      const token = generateToken(user.id);

      res.writeHead(200);
      res.end(JSON.stringify({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          fullName: user.fullName,
          matricNumber: user.matricNumber,
          email: user.email,
          verified: user.verified
        }
      }));
      return;
    }

    // Get current user endpoint
    if (url === '/api/auth/me' && method === 'GET') {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.writeHead(401);
        res.end(JSON.stringify({ message: 'Access token required' }));
        return;
      }

      const token = authHeader.substring(7);
      const users = readUsers();

      // Find user with matching token (simplified validation)
      const user = users.find(u => {
        const userToken = generateToken(u.id);
        return userToken === token;
      });

      if (!user) {
        res.writeHead(401);
        res.end(JSON.stringify({ message: 'Invalid token' }));
        return;
      }

      res.writeHead(200);
      res.end(JSON.stringify({
        user: {
          id: user.id,
          fullName: user.fullName,
          matricNumber: user.matricNumber,
          email: user.email,
          verified: user.verified
        }
      }));
      return;
    }

    // Health check
    if (url === '/api/health' && method === 'GET') {
      res.writeHead(200);
      res.end(JSON.stringify({ status: 'OK', message: 'NileShop API is running' }));
      return;
    }

    // 404 Not Found
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Endpoint not found' }));
  });
});

server.listen(PORT, () => {
  console.log(`🚀 NileShop backend server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`👥 User data stored in: ${USERS_FILE}`);
});