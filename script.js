/* ─── DATA ─── */
const products = [
  {id:1,name:'Engineering Mathematics (Vol I & II)',cat:'books',emoji:'📐',price:7500,oldPrice:9000,rating:'4.8 (120)',sales:'240 sold',desc:'Complete two-volume set covering calculus, differential equations, and linear algebra. Essential for 100–300L engineering students.',specs:{Faculty:'Engineering',Level:'100–300L',Author:'Kreyszig',Edition:'10th'}},
  {id:2,name:'Laptop Cooling Pad — Dual Fan',cat:'tech',emoji:'💻',price:12500,rating:'4.6 (88)',sales:'180 sold',desc:'Ergonomic dual-fan cooling pad compatible with 15–17" laptops. USB-powered with LED blue accent.',specs:{Fans:'2 × 120mm',USB:'Powered',Compatibility:'15"–17"',Weight:'680g'}},
  {id:3,name:'Nile University Branded Hoodie',cat:'apparel',emoji:'👕',price:8900,tag:'New',rating:'4.9 (204)',sales:'512 sold',desc:'100% cotton premium hoodie with embroidered Nile University crest. Available in sizes S–XXL.',specs:{Material:'100% Cotton',Fit:'Oversized',Sizes:'S · M · L · XL · XXL',Care:'Machine wash'}},
  {id:4,name:'Scientific Calculator FX-991ES',cat:'stationery',emoji:'🔢',price:18000,oldPrice:21000,rating:'4.7 (310)',sales:'820 sold',desc:'Casio FX-991ES PLUS with 417 functions. Approved for JAMB and university exams.',specs:{Functions:'417',Display:'Natural-V.P.A.M.',Battery:'AAA × 1',Approved:'WAEC · NECO · JAMB'}},
  {id:5,name:'A4 Lecture Notepad Bundle (5-pack)',cat:'stationery',emoji:'📓',price:2200,rating:'4.5 (540)',sales:'1,200 sold',desc:'Pack of 5 premium ruled notepads, 80 pages each. Micro-perforated for clean tear-out.',specs:{Pages:'80/pad',Ruling:'8mm lined',Paper:'80gsm',Pack:'5 pads'}},
  {id:6,name:'Introduction to Data Structures',cat:'books',emoji:'📖',price:6000,oldPrice:7500,rating:'4.7 (95)',sales:'310 sold',desc:'Widely-used CSC textbook covering arrays, linked lists, trees, graphs, and sorting algorithms.',specs:{Faculty:'Computer Science',Level:'200L',ISBN:'978-0262533058',Pages:'432'}},
  {id:7,name:'USB-C Hub — 7-in-1',cat:'tech',emoji:'🔌',price:15000,tag:'Hot',rating:'4.8 (72)',sales:'145 sold',desc:'7-in-1 USB-C hub: 4K HDMI, USB 3.0 × 3, SD/microSD, PD charging. Perfect for MacBook & HP.',specs:{Ports:'7','4K':'HDMI','USB':'3.0 × 3',PD:'100W'}},
  {id:8,name:'Nile Univ. Branded Tote Bag',cat:'apparel',emoji:'👜',price:3500,rating:'4.6 (188)',sales:'450 sold',desc:'Heavy-duty canvas tote bag with inner zip pocket. Fits 15" laptop and A4 books.',specs:{Material:'Canvas',Capacity:'20L',Laptop:'Up to 15"',Strap:'Reinforced'}},

  // Academic Services
  {id:9,name:'Course Handouts Package',cat:'academic',emoji:'📄',price:1500,rating:'4.9 (450)',sales:'1,200 sold',desc:'Digital and printed course handouts for all 100L courses. Includes lecture notes, slides, and supplementary materials.',specs:{Format:'Digital + Print',Courses:'All 100L',Updates:'Weekly',Access:'Mobile App'}},
  {id:10,name:'Past Questions Database',cat:'academic',emoji:'❓',price:2500,tag:'Hot',rating:'4.8 (320)',sales:'890 sold',desc:'Complete past questions database for all departments. Includes solutions and marking schemes from 2015–2024.',specs:{Years:'2015–2024',Departments:'All',Solutions:'Included',Format:'PDF + App'}},
  {id:11,name:'Basic Lab Kit Rental',cat:'academic',emoji:'🧪',price:3000,rating:'4.7 (180)',sales:'420 sold',desc:'Complete basic lab equipment kit for chemistry/physics experiments. Includes safety gear and instruction manual.',specs:{Equipment:'15 items',Duration:'Per Semester',Safety:'Included',Cleaning:'Required'}},
  {id:12,name:'Assignment Printing Service',cat:'academic',emoji:'🖨️',price:500,rating:'4.6 (680)',sales:'2,100 sold',desc:'High-quality printing service for assignments and projects. Color printing available, same-day pickup.',specs:{Quality:'High-res',Color:'Available',Pickup:'Same-day',Binding:'Optional'}},
  {id:13,name:'AI Study Assistant Subscription',cat:'academic',emoji:'🤖',price:5000,tag:'New',rating:'4.9 (95)',sales:'180 sold',desc:'AI-powered study assistant with personalized learning plans, quiz generation, and 24/7 academic support.',specs:{Features:'Quiz Gen + Plans',Support:'24/7',Languages:'English + Arabic',Mobile:'App Available'}},

  // Food & Lifestyle
  {id:14,name:'Cafeteria Meal Pre-order',cat:'food',emoji:'🍽️',price:1200,rating:'4.8 (1200)',sales:'3,200 sold',desc:'Pre-order your favorite cafeteria meals to skip the lines. Choose from daily specials and dietary options.',specs:{Pickup:'Cafeteria',Time:'Scheduled',Dietary:'Options',Payment:'Prepaid'}},
  {id:15,name:'Midnight Snacks Delivery',cat:'food',emoji:'🌙',price:800,rating:'4.7 (890)',sales:'2,400 sold',desc:'Late-night snack delivery to your hostel room. Freshly prepared items delivered within 30 minutes.',specs:{Hours:'10PM–2AM',Delivery:'30 min',Fresh:'Prepared',Payment:'Cash/Card'}},
  {id:16,name:'Hostel Grocery Pack',cat:'food',emoji:'🛒',price:2500,rating:'4.6 (650)',sales:'1,800 sold',desc:'Weekly grocery essentials pack delivered to your hostel. Customizable based on dietary preferences.',specs:{Frequency:'Weekly',Custom:'Yes',Delivery:'Hostel Door',Fresh:'Guaranteed'}},
  {id:17,name:'Coffee Subscription',cat:'food',emoji:'☕',price:1800,tag:'Popular',rating:'4.9 (420)',sales:'950 sold',desc:'Monthly coffee subscription with premium blends. Daily delivery to your preferred location on campus.',specs:{Blend:'Premium',Frequency:'Daily',Delivery:'Campus-wide',Size:'Medium Cup'}},

  // Tech Services (additional)
  {id:18,name:'Laptop Rental — Weekly',cat:'tech',emoji:'💻',price:7500,rating:'4.7 (150)',sales:'380 sold',desc:'High-performance laptop rental for assignments and projects. Includes charger and basic software setup.',specs:{Specs:'i5/8GB/256GB',Duration:'Weekly',Software:'Pre-installed',Support:'Tech Help'}},
  {id:19,name:'Charger Bank Rental',cat:'tech',emoji:'🔋',price:300,rating:'4.8 (580)',sales:'1,600 sold',desc:'Portable charger bank rental for all-day power. Multiple ports, fast charging capability.',specs:{Capacity:'10000mAh',Ports:'3 × USB',Speed:'Fast Charge',Duration:'Daily'}},
  {id:20,name:'VR Lab Access Pass',cat:'tech',emoji:'🥽',price:2000,tag:'New',rating:'4.9 (75)',sales:'120 sold',desc:'Access to university VR laboratory. Includes equipment usage and basic training session.',specs:{Equipment:'Oculus Quest 2',Duration:'2 hours',Training:'Included',Booking:'Required'}},
  {id:21,name:'Gaming Zone Booking',cat:'tech',emoji:'🎮',price:1500,rating:'4.8 (320)',sales:'780 sold',desc:'Private gaming station booking in campus gaming zone. High-end PC with latest games.',specs:{Duration:'2 hours',PC:'RTX 3060',Games:'Latest',Drinks:'Included'}},

  // Campus Living Services
  {id:22,name:'Laundry Pickup & Delivery',cat:'services',emoji:'👔',price:800,rating:'4.7 (950)',sales:'2,600 sold',desc:'Professional laundry service with pickup and delivery. Wash, dry, fold — all in 24 hours.',specs:{Service:'Wash + Dry + Fold',Time:'24 hours',Pickup:'Hostel-wide',Quality:'Professional'}},
  {id:23,name:'Room Cleaning Service',cat:'services',emoji:'🧹',price:1200,rating:'4.6 (420)',sales:'1,100 sold',desc:'Deep cleaning service for hostel rooms. Includes dusting, vacuuming, and bathroom sanitization.',specs:{Frequency:'Weekly/Monthly',Deep:'Clean',Bathroom:'Included',Eco:'Friendly Products'}},
  {id:24,name:'Hostel Maintenance Request',cat:'services',emoji:'🔧',price:0,rating:'4.5 (680)',sales:'1,900 sold',desc:'Report and schedule maintenance issues. From leaky faucets to electrical problems — we handle it all.',specs:{Response:'24 hours',Priority:'Levels',Followup:'Included',Emergency:'Available'}},
  {id:25,name:'Moving Service',cat:'services',emoji:'📦',price:2500,rating:'4.8 (180)',sales:'420 sold',desc:'Professional moving service for hostel relocations. Careful handling of belongings and furniture.',specs:{Service:'Full Move',Careful:'Handling',Furniture:'Included',Insurance:'Covered'}},

  // Fun/Extra Services
  {id:26,name:'Exam Survival Kit',cat:'fun',emoji:'📚',price:3500,tag:'Exam Season',rating:'4.9 (290)',sales:'650 sold',desc:'Complete exam survival kit with energy bars, study aids, stress relief items, and good luck charms.',specs:{Items:'15+ items',Energy:'Bars',Stress:'Relief',Luck:'Charms'}},
  {id:27,name:'Motivation Therapy Session',cat:'fun',emoji:'😭',price:1500,rating:'4.7 (95)',sales:'180 sold',desc:'One-on-one motivation session with certified counselor. Perfect for exam stress or academic burnout.',specs:{Duration:'1 hour',Certified:'Counselor',Confidential:'Yes',Followup:'Available'}},
  {id:28,name:'Date Planning Service',cat:'fun',emoji:'💕',price:3000,tag:'Romantic',rating:'4.8 (120)',sales:'280 sold',desc:'Complete date planning service with reservations, transportation, and surprise elements.',specs:{Planning:'Complete',Transportation:'Included',Surprises:'Yes',Budget:'Custom'}},
  {id:29,name:'Lost & Found Marketplace',cat:'fun',emoji:'🔍',price:0,rating:'4.6 (450)',sales:'1,200 sold',desc:'Campus lost and found service with secure storage. Post found items or search for lost belongings.',specs:{Secure:'Storage',Search:'Database',Claims:'Verified',Free:'Service'}},
  {id:30,name:'Campus Influencer Promotion',cat:'fun',emoji:'📸',price:5000,tag:'Trending',rating:'4.9 (85)',sales:'150 sold',desc:'Social media promotion service through campus influencers. Reach thousands of students instantly.',specs:{Reach:'5K+ students',Platforms:'IG + TikTok',Content:'Custom',Analytics:'Included'}},
  {id:31,name:'Event Tickets Booking',cat:'fun',emoji:'🎟️',price:1000,rating:'4.8 (380)',sales:'920 sold',desc:'Book tickets for campus events, concerts, and activities. Priority access and best seats available.',specs:{Events:'All Campus',Priority:'Access',Seats:'Best Available',Refund:'Policy'}},
  {id:32,name:'Bike Rental Service',cat:'fun',emoji:'🚲',price:400,rating:'4.7 (520)',sales:'1,400 sold',desc:'Campus bike rental for getting around. Well-maintained bikes with helmets and locks included.',specs:{Duration:'Daily',Helmet:'Included',Lock:'Provided',Maintenance:'Regular'}}
];

/* ─── DEALS ─── */
const dealsProducts = [
  {id:1001,name:'Scientific Calculator FX-991ES',cat:'stationery',emoji:'🔢',price:14400,oldPrice:18000,tag:'20% Off',rating:'4.7 (310)',sales:'820 sold',desc:'Casio FX-991ES PLUS with 417 functions. Approved for JAMB and university exams. 20% off!',specs:{Functions:'417',Display:'Natural-V.P.A.M.',Battery:'AAA × 1',Approved:'WAEC · NECO · JAMB'}},
  {id:1002,name:'A4 Lecture Notepad Bundle (5-pack)',cat:'stationery',emoji:'📓',price:1760,oldPrice:2200,tag:'20% Off',rating:'4.5 (540)',sales:'1,200 sold',desc:'Pack of 5 premium ruled notepads, 80 pages each. Micro-perforated for clean tear-out. 20% off!',specs:{Pages:'80/pad',Ruling:'8mm lined',Paper:'80gsm',Pack:'5 pads'}}
];

/* ─── STATE ─── */
let cart = [];
let currentProduct = null;
let currentQty = 1;
let prevPage = 'products';
let user = null;
let discount = 0;
let deliveryCost = 500;
let authToken = localStorage.getItem('authToken');

// API Base URL
const API_BASE = 'http://localhost:5000/api';

/* ─── API FUNCTIONS ─── */
async function apiRequest(endpoint, options = {}) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    showToast(`❌ ${error.message}`);
    throw error;
  }
}

async function registerUser(userData) {
  try {
    const response = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });

    authToken = response.token;
    localStorage.setItem('authToken', authToken);
    user = response.user;
    updateUserUI();
    showToast('✓ Account created successfully!');
    goto('home');
  } catch (error) {
    // Error already shown by apiRequest
  }
}

async function loginUser(credentials) {
  try {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    authToken = response.token;
    localStorage.setItem('authToken', authToken);
    user = response.user;
    updateUserUI();
    showToast('✓ Signed in successfully');
    goto('home');
  } catch (error) {
    // Error already shown by apiRequest
  }
}

async function getCurrentUser() {
  if (!authToken) return;

  try {
    const response = await apiRequest('/auth/me');
    user = response.user;
    updateUserUI();
  } catch (error) {
    // Token might be expired, clear it
    logoutUser();
  }
}

function logoutUser() {
  authToken = null;
  user = null;
  localStorage.removeItem('authToken');
  updateUserUI();
  showToast('Signed out');
}

function updateUserUI() {
  const avatar = document.getElementById('nav-avatar');
  const userLabel = document.getElementById('nav-user-label');

  if (user) {
    avatar.textContent = user.fullName.charAt(0).toUpperCase();
    userLabel.textContent = user.fullName.split(' ')[0];
  } else {
    avatar.textContent = '?';
    userLabel.textContent = 'Sign In';
  }
}

// Initialize user on page load
getCurrentUser();

/* ─── NAV ─── */
function goto(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  if(page==='home') document.querySelectorAll('.nav-link')[0].classList.add('active');
  if(page==='products') document.querySelectorAll('.nav-link')[1].classList.add('active');
  if(page==='services') document.querySelectorAll('.nav-link')[2].classList.add('active');
  if(page==='deals') document.querySelectorAll('.nav-link')[3].classList.add('active');
  window.scrollTo(0,0);
  if(page==='cart') renderCart();
  if(page==='checkout') renderCheckout();
  if(page==='services') renderServices();
  if(page==='deals') renderDeals();
}

/* ─── RENDER PRODUCT CARD ─── */
function productCard(p){
  return `<div class="product-card" onclick="openProduct(${p.id})">
    <div class="product-img-wrap">
      ${p.tag?`<div class="product-badge"><span class="tag tag-amber">${p.tag}</span></div>`:''}
      <div class="product-wish ${p.wished?'active':''}" onclick="event.stopPropagation();toggleWish(${p.id},this)">♡</div>
      ${p.emoji}
    </div>
    <div class="product-info">
      <div class="product-cat">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-rating"><span class="stars">★★★★★</span><span>${p.rating}</span></div>
      <div class="product-bottom">
        <div>
          <span class="product-price">₦${p.price.toLocaleString()}</span>
          ${p.oldPrice?`<span class="product-price-old">₦${p.oldPrice.toLocaleString()}</span>`:''}
        </div>
        <button class="product-add" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
      </div>
    </div>
  </div>`;
}

/* ─── RENDER GRIDS ─── */
function renderGrids(list){
  // Home grid shows featured items (mix of products and services)
  document.getElementById('home-grid').innerHTML = list.slice(0,4).map(productCard).join('');
  // Products grid shows only physical products
  const physicalProducts = list.filter(p => !['academic', 'food', 'services', 'fun'].includes(p.cat) && 
    !(p.cat === 'tech' && ['Laptop Rental — Weekly', 'Charger Bank Rental', 'VR Lab Access Pass', 'Gaming Zone Booking'].includes(p.name)));
  document.getElementById('products-grid').innerHTML = physicalProducts.map(productCard).join('');
}
renderGrids(products);

/* ─── RENDER SERVICES ─── */
function renderServices(){
  const services = products.filter(p => ['academic', 'food', 'services', 'fun'].includes(p.cat) || 
    (p.cat === 'tech' && ['Laptop Rental — Weekly', 'Charger Bank Rental', 'VR Lab Access Pass', 'Gaming Zone Booking'].includes(p.name)));
  document.getElementById('services-grid').innerHTML = services.map(productCard).join('');
}

/* ─── RENDER DEALS ─── */
function renderDeals(){
  document.getElementById('deals-grid').innerHTML = dealsProducts.map(productCard).join('');
}

/* ─── FILTER ─── */
function filterCat(cat,el){
  document.querySelectorAll('#page-home .cat-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const filtered = cat==='all' ? products : products.filter(p=>p.cat===cat);
  document.getElementById('home-grid').innerHTML = filtered.slice(0,4).map(productCard).join('');
}
function filterCat2(cat,el){
  document.querySelectorAll('#page-products .cat-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  // Only show physical products, exclude services
  const physicalProducts = products.filter(p => !['academic', 'food', 'services', 'fun'].includes(p.cat) && 
    !(p.cat === 'tech' && ['Laptop Rental — Weekly', 'Charger Bank Rental', 'VR Lab Access Pass', 'Gaming Zone Booking'].includes(p.name)));
  const filtered = cat==='all' ? physicalProducts : physicalProducts.filter(p=>p.cat===cat);
  document.getElementById('products-grid').innerHTML = filtered.map(productCard).join('');
}
function filterServices(cat,el){
  document.querySelectorAll('#page-services .cat-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const services = products.filter(p => ['academic', 'food', 'services', 'fun'].includes(p.cat) || 
    (p.cat === 'tech' && ['Laptop Rental — Weekly', 'Charger Bank Rental', 'VR Lab Access Pass', 'Gaming Zone Booking'].includes(p.name)));
  const filtered = cat==='all' ? services : services.filter(p=>p.cat===cat || 
    (cat==='tech' && ['Laptop Rental — Weekly', 'Charger Bank Rental', 'VR Lab Access Pass', 'Gaming Zone Booking'].includes(p.name)) ||
    (cat==='transport' && p.cat==='fun' && p.name==='Bike Rental Service'));
  document.getElementById('services-grid').innerHTML = filtered.map(productCard).join('');
}

/* ─── OPEN PRODUCT ─── */
function openProduct(id){
  prevPage = document.querySelector('.page.active').id.replace('page-','');
  const allProducts = products.concat(dealsProducts);
  currentProduct = allProducts.find(p=>p.id===id);
  currentQty = 1;
  document.getElementById('pd-gallery').innerHTML = `<span style="font-size:100px">${currentProduct.emoji}</span>`;
  const thumbEmojis = ['📦','🔍','📸','📋'];
  document.getElementById('pd-thumbs').innerHTML = [currentProduct.emoji,...thumbEmojis.slice(1)].map((e,i)=>
    `<div class="pd-thumb ${i===0?'active':''}">${e}</div>`).join('');
  document.getElementById('pd-tags').innerHTML = `<span class="tag tag-green">${currentProduct.cat}</span>${currentProduct.tag?`<span class="tag tag-amber">${currentProduct.tag}</span>`:''}`;
  document.getElementById('pd-name').textContent = currentProduct.name;
  document.getElementById('pd-rating').textContent = currentProduct.rating;
  document.getElementById('pd-sales').textContent = currentProduct.sales || '';
  document.getElementById('pd-price').innerHTML = `₦${currentProduct.price.toLocaleString()}${currentProduct.oldPrice?`<span class="pd-price-old">₦${currentProduct.oldPrice.toLocaleString()}</span>`:''}`;
  document.getElementById('pd-desc').textContent = currentProduct.desc;
  document.getElementById('pd-specs').innerHTML = Object.entries(currentProduct.specs).map(([k,v])=>
    `<div class="pd-spec"><div class="pd-spec-key">${k}</div><div class="pd-spec-val">${v}</div></div>`).join('');
  document.getElementById('qty-num').textContent = 1;
  // Update back button text
  const isService = ['academic', 'food', 'services', 'fun'].includes(currentProduct.cat) || 
    (currentProduct.cat === 'tech' && ['Laptop Rental — Weekly', 'Charger Bank Rental', 'VR Lab Access Pass', 'Gaming Zone Booking'].includes(currentProduct.name));
  document.getElementById('back-text').textContent = isService ? 'services' : 'products';
  goto('detail');
}

function changeQty(d){
  currentQty = Math.max(1, currentQty + d);
  document.getElementById('qty-num').textContent = currentQty;
}

function addFromDetail(){
  for(let i=0;i<currentQty;i++) addToCart(currentProduct.id, true);
  showToast(`${currentQty}× ${currentProduct.name.substring(0,25)}… added`);
}

/* ─── CART ─── */
function addToCart(id, silent=false){
  const allProducts = products.concat(dealsProducts);
  const p = allProducts.find(x=>x.id===id);
  const ex = cart.find(x=>x.id===id);
  if(ex) ex.qty++;
  else cart.push({...p, qty:1});
  updateBadge();
  if(!silent) showToast(`${p.name.substring(0,28)}… added to cart`);
}

function updateBadge(){
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-badge').textContent = total;
}

function renderCart(){
  const list = document.getElementById('cart-items-list');
  const label = document.getElementById('cart-count-label');
  if(cart.length===0){
    document.getElementById('cart-layout').innerHTML = `<div class="empty" style="grid-column:1/-1">
      <div class="empty-icon">🛒</div>
      <h3>Your cart is empty</h3>
      <p>Looks like you haven't added anything yet.</p>
      <button class="btn btn-primary" onclick="goto('products')">Start Shopping</button>
    </div>`;
    return;
  }
  const total = cart.reduce((s,i)=>s+i.qty,0);
  label.textContent = `${total} item${total!==1?'s':''}`;
  list.innerHTML = cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">
          <span class="tag tag-green" style="font-size:10px">${item.cat}</span>
          <span>Qty: ${item.qty}</span>
        </div>
      </div>
      <div class="cart-item-price">₦${(item.price*item.qty).toLocaleString()}</div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>`).join('');
  updateSummary();
}

function removeFromCart(id){
  cart = cart.filter(i=>i.id!==id);
  updateBadge();
  renderCart();
}

function updateSummary(){
  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const del = sub>0?500:0;
  const disc = Math.round(sub*discount);
  const total = sub + del - disc;
  document.getElementById('sum-sub').textContent = `₦${sub.toLocaleString()}`;
  document.getElementById('sum-del').textContent = `₦${del.toLocaleString()}`;
  document.getElementById('sum-disc').textContent = `−₦${disc.toLocaleString()}`;
  document.getElementById('sum-total').textContent = `₦${total.toLocaleString()}`;
}

function applyPromo(){
  const code = document.getElementById('promo-field').value.trim().toUpperCase();
  if(code==='NILE2025'){discount=0.15;updateSummary();showToast('🎉 15% student discount applied!');}
  else showToast('❌ Invalid promo code');
}

/* ─── CHECKOUT ─── */
function renderCheckout(){
  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const total = sub + deliveryCost;
  document.getElementById('co-items-list').innerHTML = cart.map(i=>`
    <div class="co-item">
      <div class="co-item-img">${i.emoji}</div>
      <div class="co-item-name">${i.name} ×${i.qty}</div>
      <div class="co-item-price">₦${(i.price*i.qty).toLocaleString()}</div>
    </div>`).join('');
  document.getElementById('co-sub').textContent = `₦${sub.toLocaleString()}`;
  document.getElementById('co-del').textContent = `₦${deliveryCost.toLocaleString()}`;
  document.getElementById('co-total').textContent = `₦${total.toLocaleString()}`;
  document.getElementById('co-total-btn').textContent = `₦${total.toLocaleString()}`;

  // Add event listener to delivery select
  const deliverySelect = document.querySelector('#page-checkout select');
  deliverySelect.onchange = function(){
    deliveryCost = parseInt(this.value);
    renderCheckout(); // Re-render to update totals
  };
}

function placeOrder(){
  const id = 'NUS-'+Math.floor(100000+Math.random()*900000);
  document.getElementById('order-id-display').textContent = '#'+id;
  cart=[];
  updateBadge();
  goto('success');
}

/* ─── AUTH ─── */
function login(){
  const email = document.querySelector('#tab-login input[type="text"]').value;
  const password = document.querySelector('#tab-login input[type="password"]').value;

  if (!email || !password) {
    showToast('❌ Please fill in all fields');
    return;
  }

  loginUser({ email, password });
}

function register(){
  const fullName = document.querySelector('#tab-register input[placeholder*="Full Name"]').value;
  const matricNumber = document.querySelector('#tab-register input[placeholder*="Matric Number"]').value;
  const email = document.querySelector('#tab-register input[type="email"]').value;
  const password = document.querySelector('#tab-register input[type="password"]').value;

  if (!fullName || !matricNumber || !email || !password) {
    showToast('❌ Please fill in all fields');
    return;
  }

  if (password.length < 8) {
    showToast('❌ Password must be at least 8 characters');
    return;
  }

  registerUser({ fullName, matricNumber, email, password });
}

function switchTab(tab,el){
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-login').classList.toggle('hidden', tab!=='login');
  document.getElementById('tab-register').classList.toggle('hidden', tab!=='register');
}

/* ─── WISH ─── */
function toggleWish(id,el){
  const p = products.find(x=>x.id===id);
  p.wished = !p.wished;
  el.classList.toggle('active');
  el.textContent = p.wished ? '♥' : '♡';
  showToast(p.wished ? '♥ Added to wishlist' : 'Removed from wishlist');
}

/* ─── TOAST ─── */
function showToast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}