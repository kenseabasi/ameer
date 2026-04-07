# NileShop Backend

Backend API for NileShop student authentication and data management.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env` file and update the values:
   ```bash
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/nileshop

   # For MongoDB Atlas (cloud)
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nileshop

   # Generate a secure JWT secret
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. **Start MongoDB** (if using local installation):
   ```bash
   # On Windows
   net start MongoDB

   # Or use MongoDB Compass
   ```

5. **Start the backend server:**
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new student
- `POST /api/auth/login` - Student login
- `GET /api/auth/me` - Get current user info

### Health Check
- `GET /api/health` - Server health status

## Student Data Storage

The backend stores the following student information:
- Full Name
- Matric Number (unique)
- Email (unique)
- Password (hashed with bcrypt)
- Verification status
- Registration date

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS enabled for frontend communication
- Input validation
- Secure password requirements

## Testing the API

You can test the API using:
- Postman
- Thunder Client (VS Code extension)
- curl commands

Example registration:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Emeka Okafor",
    "matricNumber": "NUN/2022/CSC/001",
    "email": "student@nileuniversity.edu.ng",
    "password": "securepassword123"
  }'
```

## Deployment

For production deployment:
1. Set strong JWT_SECRET
2. Use MongoDB Atlas or secure MongoDB instance
3. Set NODE_ENV=production
4. Use process manager like PM2
5. Set up SSL/HTTPS

## Troubleshooting

- **MongoDB connection error**: Check if MongoDB is running and connection string is correct
- **Port already in use**: Change PORT in .env file
- **CORS errors**: Ensure frontend is running on different port than backend