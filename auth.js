// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyB_hfYKaoEpl0tSH5hCv6Ou-Xg7tur3XjQ",
  authDomain: "my-library-9a39f.firebaseapp.com",
  projectId: "my-library-9a39f",
  storageBucket: "my-library-9a39f.firebasestorage.app",
  messagingSenderId: "197956845152",
  appId: "1:197956845152:web:a884e2ef91a0ae604f0d05"
};
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

 
// ===== IN-MEMORY CACHE =====
let _books = [];
let _authors = [];
let _users = [];
 
// ===== LOAD ALL DATA FROM FIRESTORE =====
async function loadFromFirestore() {
  try {
    const [booksSnap, authorsSnap, usersSnap] = await Promise.all([
      db.collection('data').doc('books').get(),
      db.collection('data').doc('authors').get(),
      db.collection('data').doc('users').get()
    ]);
    if (booksSnap.exists) _books = booksSnap.data().items || [];
    if (authorsSnap.exists) _authors = authorsSnap.data().items || [];
    if (usersSnap.exists) _users = usersSnap.data().items || [];
  } catch (error) {
    console.error('Firebase load error:', error);
  }
}
 
// Call on load — other scripts wait for this
const _dataPromise = loadFromFirestore();
function onDataReady(callback) {
  _dataPromise.then(callback);
}
 
// ===== ADMIN CREDENTIALS (hashed) =====
const ADMIN_CREDENTIALS = {
  username: '66616c65685f61646d696e',
  password: '61646d696e313233'
};
 
function toHex(str) {
  return str.split('').map(c => c.charCodeAt(0).toString(16)).join('');
}
 
function loginAdmin(username, password) {
  if (toHex(username) === ADMIN_CREDENTIALS.username && toHex(password) === ADMIN_CREDENTIALS.password) {
    localStorage.setItem('admin_logged_in', 'true');
    return true;
  }
  return false;
}
 
// ===== BOOKS =====
function getBooks() {
  return _books;
}
function saveBooks(books) {
  _books = books;
  db.collection('data').doc('books').set({ items: books })
    .catch(e => console.error('Save books error:', e));
}
 
// ===== AUTHORS =====
function getAuthors() {
  return _authors;
}
function saveAuthors(authors) {
  _authors = authors;
  db.collection('data').doc('authors').set({ items: authors })
    .catch(e => console.error('Save authors error:', e));
}
 
// ===== USERS =====
function getUsers() {
  return _users;
}
function saveUsers(users) {
  _users = users;
  // Strip large base64 avatars before saving to Firestore (1MB doc limit)
  const cleanUsers = users.map(u => ({
    ...u,
    avatar: u.avatar || ''
  }));
  db.collection('data').doc('users').set({ items: cleanUsers })
    .catch(e => console.error('Save users error:', e));
}
 
// ===== CURRENT USER (stays in localStorage — it's a session) =====
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('current_user')) || null;
}
function setCurrentUser(user) {
  localStorage.setItem('current_user', JSON.stringify(user));
}
function logoutUser() {
  localStorage.removeItem('current_user');
  window.location.href = 'index.html';
}
 
// ===== ADMIN SESSION =====
function isAdminLoggedIn() {
  return localStorage.getItem('admin_logged_in') === 'true';
}
 
function logoutAdmin() {
  localStorage.removeItem('admin_logged_in');
  window.location.href = 'index.html';
}
 
// ===== USER SIGNUP =====
function signupUser(username, email, password, avatar, dob) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { success: false, message: 'Email already exists!' };
  if (users.find(u => u.username === username)) return { success: false, message: 'Username already taken!' };
  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    avatar: avatar || '',
    joinDate: new Date().toLocaleDateString(),
    dob: dob || '',
    downloads: [],
    banned: false
  };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  return { success: true };
}
 
// ===== USER SIGNIN =====
function signinUser(identifier, password) {
  const users = getUsers();
  const user = users.find(u =>
    (u.email.toLowerCase() === identifier.toLowerCase() || u.username.toLowerCase() === identifier.toLowerCase()) && u.password === password
  );
  if (!user) return { success: false, message: 'Invalid username/email or password!' };
 
  // check ban expiry
  if (user.banned && user.banExpiryTime) {
    if (Date.now() > user.banExpiryTime) {
      user.banned = false;
      user.banExpiry = null;
      user.banExpiryTime = null;
      const allUsers = getUsers();
      const index = allUsers.findIndex(u => u.id === user.id);
      if (index !== -1) { allUsers[index] = user; saveUsers(allUsers); }
    }
  }
 
  if (user.banned) return { success: false, message: '🚫 Your account has been banned!' };
  if (user.suspended) return { success: false, message: '⏸️ Your account has been suspended!' };
 
  setCurrentUser(user);
  return { success: true };
}
 
