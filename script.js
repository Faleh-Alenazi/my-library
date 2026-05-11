// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== TOAST =====
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== NAVBAR SEARCH =====
const navSearch = document.getElementById('navSearch');
if (navSearch) {
  navSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && navSearch.value.trim()) {
      window.location.href = `books.html?search=${encodeURIComponent(navSearch.value.trim())}`;
    }
  });
}

// ===== LOGOUT =====
function handleLogout() {
  logoutUser();
  showToast('Logged out successfully!', 'success');
  setTimeout(() => window.location.href = 'index.html', 1000);
}

function handleAdminLogout() {
  logoutAdmin();
  showToast('Admin logged out!', 'success');
  setTimeout(() => window.location.href = 'index.html', 1000);
}

// ===== UPDATE NAVBAR =====
function updateNavbar() {
  const user = getCurrentUser();
  const admin = isAdminLoggedIn();
  const signInBtn = document.getElementById('signInBtn');
  const signUpBtn = document.getElementById('signUpBtn');
  const avatarArea = document.getElementById('avatarArea');
  const dropdownUsername = document.getElementById('dropdownUsername');
  const dropdownEmail = document.getElementById('dropdownEmail');
  const userAvatar = document.getElementById('userAvatar');

  if (admin) {
    // Admin is logged in — hide Sign In/Sign Up and avatar
    if (signInBtn) signInBtn.style.display = 'none';
    if (signUpBtn) signUpBtn.style.display = 'none';
    if (avatarArea) avatarArea.style.display = 'none';
  } else if (user) {
    // Regular user is logged in
    if (signInBtn) signInBtn.style.display = 'none';
    if (signUpBtn) signUpBtn.style.display = 'none';
    if (avatarArea) avatarArea.style.display = 'flex';
    if (dropdownUsername) dropdownUsername.textContent = user.username;
    if (dropdownEmail) dropdownEmail.textContent = user.email;
    if (userAvatar) userAvatar.src = user.avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${user.username}`;
  } else {
    // No one is logged in
    if (signInBtn) signInBtn.style.display = 'inline-block';
    if (signUpBtn) signUpBtn.style.display = 'inline-block';
    if (avatarArea) avatarArea.style.display = 'none';
  }
}

// ===== UPDATE FOOTER =====
function updateFooter() {
  const user = getCurrentUser();
  const admin = isAdminLoggedIn();
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminControls = document.getElementById('adminControls');

  if (admin) {
    if (adminControls) adminControls.classList.add('visible');
    if (adminLoginBtn) adminLoginBtn.style.display = 'none';
  } else {
    if (adminControls) adminControls.classList.remove('visible');
    if (adminLoginBtn) adminLoginBtn.style.display = user ? 'none' : 'inline-flex';
  }
}

// ===== CATEGORIES =====
const categories = [
  { name: 'Fiction', icon: '📖', nameAr: 'خيال' },
  { name: 'Mystery', icon: '🔍', nameAr: 'غموض' },
  { name: 'Romance', icon: '💕', nameAr: 'رومانسية' },
  { name: 'Science Fiction', icon: '🚀', nameAr: 'خيال علمي' },
  { name: 'Horror', icon: '👻', nameAr: 'رعب' },
  { name: 'Adventure', icon: '⚔️', nameAr: 'مغامرة' },
  { name: 'Fantasy', icon: '🧙', nameAr: 'فانتازيا' },
  { name: 'History', icon: '🏛️', nameAr: 'تاريخ' },
  { name: 'Biography', icon: '👤', nameAr: 'سيرة ذاتية' },
  { name: 'Philosophy', icon: '🧠', nameAr: 'فلسفة' },
  { name: 'Self-Help', icon: '💪', nameAr: 'تطوير الذات' },
  { name: 'Poetry', icon: '✍️', nameAr: 'شعر' },
  { name: 'Drama', icon: '🎭', nameAr: 'دراما' },
  { name: 'Comedy', icon: '😄', nameAr: 'كوميديا' },
  { name: 'Crime', icon: '🔫', nameAr: 'جريمة' },
  { name: 'Thriller', icon: '😱', nameAr: 'إثارة' },
  { name: 'Classic', icon: '📜', nameAr: 'كلاسيكي' },
  { name: 'Science', icon: '🔬', nameAr: 'علوم' },
  { name: 'Politics', icon: '🏛️', nameAr: 'سياسة' },
  { name: 'Art', icon: '🎨', nameAr: 'فن' },
  { name: 'Travel', icon: '✈️', nameAr: 'سفر' },
  { name: 'Cooking', icon: '🍳', nameAr: 'طبخ' },
  { name: 'Psychology', icon: '🧬', nameAr: 'علم النفس' },
  { name: 'Religion', icon: '🕌', nameAr: 'دين' },
  { name: 'Children', icon: '🧸', nameAr: 'أطفال' },
  { name: 'Business', icon: '💼', nameAr: 'أعمال' },
  { name: 'Health', icon: '❤️', nameAr: 'صحة' },
  { name: 'Sports', icon: '⚽', nameAr: 'رياضة' },
  { name: 'Music', icon: '🎵', nameAr: 'موسيقى' },
  { name: 'Technology', icon: '💻', nameAr: 'تقنية' },
];

function loadCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  const isAr = (localStorage.getItem('lang') || 'en') === 'ar';
  grid.innerHTML = categories.map(cat => `
    <a href="books.html?category=${encodeURIComponent(cat.name)}" class="category-card">
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${isAr ? (cat.nameAr || cat.name) : cat.name}</span>
    </a>
  `).join('');
}

// ===== FEATURED BOOKS =====
function loadFeaturedBooks() {
  loadFeaturedSection('featuredBooks', 'english');
  loadFeaturedSection('featuredBooksArabic', 'arabic');
}

function loadFeaturedSection(gridId, type) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const isAr = (localStorage.getItem('lang') || 'en') === 'ar';

  const books = getBooks().filter(b => b.featured === type || (type === 'english' && b.featured === true));

  if (books.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">📚</div>
        <h3>${isAr ? 'لا توجد كتب مميزة بعد' : 'No featured books yet'}</h3>
        <p>${isAr ? 'تحقق لاحقاً!' : 'Check back soon!'}</p>
      </div>`;
    return;
  }
  grid.innerHTML = books.slice(0, 8).map(book => createBookCard(book)).join('');
}

// ===== BOOK CARD =====
function createBookCard(book) {
  const user = getCurrentUser();
  const admin = isAdminLoggedIn();
  return `
    <div class="book-card" onclick="window.location.href='book-detail.html?id=${book.id}'">
      ${book.cover
        ? `<img class="book-card-cover" src="${book.cover}" alt="${book.title}" loading="lazy"/>`
        : `<div class="book-card-cover-placeholder">📖</div>`}
      <div class="book-card-body">
        <div class="book-card-category">${book.category || 'General'}</div>
        <div class="book-card-title">${book.title}</div>
        <div class="book-card-author">by ${book.authorName || 'Unknown'}</div>
        <div class="book-card-footer">
          <span class="book-card-downloads"><i class="fas fa-download"></i> ${book.downloads || 0}</span>
          ${(user || admin)
            ? `<a href="${book.pdf}" target="_blank" class="btn btn-primary" style="padding:6px 14px;font-size:0.8rem" onclick="event.stopPropagation();trackDownload(${book.id})"><i class="fas fa-download"></i> PDF</a>`
            : `<a href="signin.html" class="btn btn-outline" style="padding:6px 14px;font-size:0.8rem" onclick="event.stopPropagation()"><i class="fas fa-lock"></i> Sign In</a>`
          }
        </div>
      </div>
    </div>
  `;
}

// ===== TRACK DOWNLOAD =====
function trackDownload(bookId) {
  const books = getBooks();
  const book = books.find(b => b.id === bookId);
  if (book) {
    book.downloads = (book.downloads || 0) + 1;
    saveBooks(books);
  }
  const user = getCurrentUser();
  if (user) {
    const users = getUsers();
    const u = users.find(x => x.id === user.id);
    if (u) {
      if (!u.downloads) u.downloads = [];
      if (!u.downloads.includes(bookId)) u.downloads.push(bookId);
      saveUsers(users);
      setCurrentUser(u);
    }
  }
}

// ===== HERO STATS =====
function loadHeroStats() {
  const totalBooks = document.getElementById('totalBooksCount');
  const totalAuthors = document.getElementById('totalAuthorsCount');
  if (totalBooks) totalBooks.textContent = getBooks().length;
  if (totalAuthors) totalAuthors.textContent = getAuthors().length;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  loadLang();
  onDataReady(() => {
    updateNavbar();
    updateFooter();
    loadCategories();
    loadFeaturedBooks();
    loadHeroStats();
  });
});

// ===== AVATAR DROPDOWN CLICK =====
document.addEventListener('click', (e) => {
  const avatarArea = document.getElementById('avatarArea');
  const dropdown = document.querySelector('.avatar-dropdown');
  if (!avatarArea || !dropdown) return;

  if (avatarArea.contains(e.target)) {
    dropdown.classList.toggle('open');
  } else {
    dropdown.classList.remove('open');
  }
});
// ===== DARK MODE =====
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = 'fas fa-sun';
  }
}