// ===== LANGUAGE SYSTEM =====

const translations = {
  en: {
    // NAVBAR
    'nav-home': 'Home',
    'nav-books': 'Books',
    'nav-ai': 'AI Assistant',
    'nav-signin': 'Sign In',
    'nav-signup': 'Sign Up',
    'nav-search': 'Search books or authors...',
    'nav-myaccount': 'My Account',
    'nav-browse': 'Browse Books',
    'nav-logout': 'Log Out',

    // INDEX HERO
    'hero-badge': '✨ Your Personal Library',
    'hero-title': 'Discover Your Next<br/><span>Favorite Book</span>',
    'hero-subtitle': 'Thousands of carefully curated books, handpicked for every reader. Find your story, download and enjoy.',
    'hero-explore': 'Explore Books',
    'hero-ai': 'Ask AI Assistant',
    'hero-stat-books': 'Books',
    'hero-stat-authors': 'Authors',
    'hero-stat-downloads': 'Downloads',

    // INDEX CATEGORIES
    'cat-title': 'Browse by Genre',
    'cat-subtitle': "Find exactly what you're in the mood for",

    // INDEX FEATURED
    'featured-title-en': 'English Featured Books',
    'featured-title-ar': 'Arabic Featured Books',
    'featured-subtitle-ar': 'Selected Arabic literature',
    'featured-subtitle': 'Handpicked by our librarians',
    'featured-viewall': 'View All',

    // INDEX HOW IT WORKS
    'how-title': 'How It Works',
    'how-subtitle': 'Three simple steps to your next great read',
    'how-step1-title': 'Browse & Search',
    'how-step1-desc': 'Explore our curated collection or search for a specific title or author',
    'how-step2-title': 'Create Account',
    'how-step2-desc': 'Sign up for free to unlock full access to all downloads',
    'how-step3-title': 'Download & Enjoy',
    'how-step3-desc': 'Download your chosen books as PDF and enjoy reading anywhere',

    // FOOTER
    'footer-tagline': 'Your personal digital library. Discover, read, and download books curated just for you.',
    'footer-quicklinks': 'Quick Links',
    'footer-account': 'Account',
    'footer-signup': 'Sign Up',
    'footer-createaccount': 'Create Account',
    'footer-copyright': '© 2026 E-Library. All rights reserved.',
    'footer-adminlogin': 'Admin Login',
    'footer-media': 'My Media Account',
    // BOOKS PAGE
    'books-title': '📚 Our Library',
    'books-subtitle': 'Browse our curated collection of books',
    'books-search-placeholder': 'Search by title or author...',
    'books-all-categories': 'All Categories',
    'books-sort-newest': 'Newest First',
    'books-sort-oldest': 'Oldest First',
    'books-sort-az': 'A — Z',
    'books-sort-za': 'Z — A',
    'books-sort-downloads': 'Most Downloaded',
    'books-empty-title': 'No books found',
    'books-empty-desc': 'Try a different search or category',
    // SIGNIN PAGE
    'signin-welcome': 'Welcome Back!',
    'signin-desc': 'Sign in to your account to access your personal library and download your favorite books.',
    'signin-feat1': 'Download your books',
    'signin-feat2': 'View download history',
    'signin-feat3': 'Access AI assistant',
    'signin-feat4': 'Manage your profile',
    'signin-noaccount': 'Don\'t have an account?',
    'signin-label-id': 'Username or Email',
    'signin-label-pass': 'Password',
    'signin-createfree': 'Create a free account',
    // SIGNUP PAGE
    'signup-join': 'Join E-Library',
    'signup-desc': 'Create your free account and get access to thousands of books ready to download.',
    'signup-feat1': 'Download unlimited books',
    'signup-feat2': 'Save your favorites',
    'signup-feat3': 'Access AI book assistant',
    'signup-feat4': 'Track download history',
    'signup-createaccount': 'Create Account',
    'signup-haveaccount': 'Already have an account?',
    'signup-chooseavatar': 'Choose your avatar',
    'signup-label-username': 'Username',
    'signup-label-email': 'Email',
    'signup-label-confirm': 'Confirm Password',
    // AI PAGE
    'ai-title': 'AI Book Assistant',
    'ai-subtitle': 'Ask me anything about books — I\'ll help you find your next great read!',
    'ai-suggest1': '📖 Recommend a mystery book',
    'ai-suggest2': '💕 Best romance novels',
    'ai-suggest3': '🚀 Top sci-fi books',
    'ai-suggest4': '😱 Scariest horror books',
    'ai-greeting': '👋 Hello! I\'m your personal book assistant. Tell me your mood, interests, or ask me anything about books — I\'ll help you find something great to read!',
    // MEDIA PAGE
    'media-title': 'Developer & Creator of E-Library',
    'media-bio': 'Passionate about building digital experiences. Connect with me on my social platforms!',
    'media-linkedin': 'Connect professionally',
    'media-github': 'Check out my projects',
    'media-back': 'Back to Library',

    // ADMIN FOOTER
    'admin-addbook': 'Add Book',
    'admin-editbooks': 'Edit/Delete Books',
    'admin-addauthor': 'Add Author',
    'admin-editauthors': 'Edit/Delete Authors',
    'admin-manageusers': 'Manage Users',
    'admin-stats': 'Stats',
    'admin-logout': 'Admin Logout',
  },

  ar: {
    // NAVBAR
    'nav-home': 'الرئيسية',
    'nav-books': 'الكتب',
    'nav-ai': 'المساعد الذكي',
    'nav-signin': 'تسجيل الدخول',
    'nav-signup': 'إنشاء حساب',
    'nav-search': 'ابحث عن كتب أو مؤلفين...',
    'nav-myaccount': 'حسابي',
    'nav-browse': 'تصفح الكتب',
    'nav-logout': 'تسجيل الخروج',

    // INDEX HERO
    'hero-badge': '✨ مكتبتك الشخصية',
    'hero-title': 'اكتشف كتابك<br/><span>المفضل القادم</span>',
    'hero-subtitle': 'آلاف الكتب المختارة بعناية لكل قارئ. اعثر على قصتك، حملها واستمتع بها.',
    'hero-explore': 'استعرض الكتب',
    'hero-ai': 'اسأل المساعد الذكي',
    'hero-stat-books': 'كتاب',
    'hero-stat-authors': 'مؤلف',
    'hero-stat-downloads': 'تحميل مجاني',

    // INDEX CATEGORIES
    'cat-title': 'تصفح حسب التصنيف',
    'cat-subtitle': 'اعثر على ما يناسب مزاجك',

    // INDEX FEATURED
    'featured-title-en': 'الكتب المميزة بالإنجليزية',
    'featured-title-ar': 'الكتب المميزة بالعربية',
    'featured-subtitle-ar': 'مختارات من الأدب العربي',
    'featured-subtitle': 'مختارة بعناية من قِبل أمناء المكتبة',
    'featured-viewall': 'عرض الكل',

    // INDEX HOW IT WORKS
    'how-title': 'كيف يعمل؟',
    'how-subtitle': 'ثلاث خطوات بسيطة لقراءتك القادمة',
    'how-step1-title': 'تصفح وابحث',
    'how-step1-desc': 'استعرض مجموعتنا أو ابحث عن عنوان أو مؤلف محدد',
    'how-step2-title': 'أنشئ حسابك',
    'how-step2-desc': 'سجل مجاناً للوصول الكامل لجميع التحميلات',
    'how-step3-title': 'حمّل واستمتع',
    'how-step3-desc': 'حمّل كتبك المفضلة بصيغة PDF واستمتع بالقراءة في أي مكان',

    // FOOTER
    'footer-tagline': 'مكتبتك الرقمية الشخصية. اكتشف واقرأ وحمّل الكتب المختارة خصيصاً لك.',
    'footer-quicklinks': 'روابط سريعة',
    'footer-account': 'الحساب',
    'footer-signup': 'إنشاء حساب',
    'footer-createaccount': 'إنشاء حساب جديد',
    'footer-copyright': '© 2026 المكتبة الإلكترونية. جميع الحقوق محفوظة.',
    'footer-adminlogin': 'دخول المشرف',
    'footer-media': 'حساب الوسائط',
    // BOOKS PAGE
    'books-title': '📚 مكتبتنا',
    'books-subtitle': 'تصفح مجموعتنا المختارة من الكتب',
    'books-search-placeholder': 'ابحث بالعنوان أو المؤلف...',
    'books-all-categories': 'جميع التصنيفات',
    'books-sort-newest': 'الأحدث أولاً',
    'books-sort-oldest': 'الأقدم أولاً',
    'books-sort-az': 'أ — ي',
    'books-sort-za': 'ي — أ',
    'books-sort-downloads': 'الأكثر تحميلاً',
    'books-empty-title': 'لا توجد كتب',
    'books-empty-desc': 'جرب بحثاً أو تصنيفاً مختلفاً',
    // SIGNIN PAGE
    'signin-welcome': 'مرحباً بعودتك!',
    'signin-desc': 'سجل دخولك للوصول إلى مكتبتك الشخصية وتحميل كتبك المفضلة.',
    'signin-feat1': 'حمّل كتبك',
    'signin-feat2': 'عرض سجل التحميلات',
    'signin-feat3': 'الوصول للمساعد الذكي',
    'signin-feat4': 'إدارة ملفك الشخصي',
    'signin-noaccount': 'ليس لديك حساب؟',
    'signin-label-id': 'اسم المستخدم أو البريد',
    'signin-label-pass': 'كلمة المرور',
    'signin-createfree': 'أنشئ حساباً مجانياً',
    // SIGNUP PAGE
    'signup-join': 'انضم إلى المكتبة الإلكترونية',
    'signup-desc': 'أنشئ حسابك المجاني واحصل على آلاف الكتب جاهزة للتحميل.',
    'signup-feat1': 'حمّل كتباً بلا حدود',
    'signup-feat2': 'احفظ المفضلة',
    'signup-feat3': 'الوصول للمساعد الذكي',
    'signup-feat4': 'تتبع سجل التحميلات',
    'signup-createaccount': 'إنشاء حساب',
    'signup-haveaccount': 'لديك حساب بالفعل؟',
    'signup-chooseavatar': 'اختر صورتك الشخصية',
    'signup-label-username': 'اسم المستخدم',
    'signup-label-email': 'البريد الإلكتروني',
    'signup-label-confirm': 'تأكيد كلمة المرور',
    // AI PAGE
    'ai-title': 'المساعد الذكي للكتب',
    'ai-subtitle': 'اسألني أي شيء عن الكتب — سأساعدك في العثور على قراءتك القادمة!',
    'ai-suggest1': '📖 أوصِ بكتاب غموض',
    'ai-suggest2': '💕 أفضل روايات الرومانسية',
    'ai-suggest3': '🚀 أفضل كتب الخيال العلمي',
    'ai-suggest4': '😱 أرعب كتب الرعب',
    'ai-greeting': '👋 مرحباً! أنا مساعدك الشخصي للكتب. أخبرني عن مزاجك أو اهتماماتك واسألني أي شيء عن الكتب!',
    // MEDIA PAGE
    'media-title': 'مطور ومنشئ المكتبة الإلكترونية',
    'media-bio': 'شغوف ببناء التجارب الرقمية. تواصل معي على منصاتي الاجتماعية!',
    'media-linkedin': 'تواصل معي مهنياً',
    'media-github': 'تصفح مشاريعي',
    'media-back': 'العودة للمكتبة',

    // ADMIN FOOTER
    'admin-addbook': 'إضافة كتاب',
    'admin-editbooks': 'تعديل/حذف الكتب',
    'admin-addauthor': 'إضافة مؤلف',
    'admin-editauthors': 'تعديل/حذف المؤلفين',
    'admin-manageusers': 'إدارة المستخدمين',
    'admin-stats': 'الإحصائيات',
    'admin-logout': 'تسجيل خروج المشرف',
  }
};

// ===== TOGGLE LANGUAGE =====
function toggleLang() {
  const current = localStorage.getItem('lang') || 'en';
  const next = current === 'en' ? 'ar' : 'en';
  localStorage.setItem('lang', next);
  applyLang(next);
  // Re-render dynamic content
  if (typeof loadCategories === 'function') loadCategories();
  if (typeof loadFeaturedBooks === 'function') loadFeaturedBooks();
  if (typeof loadBooksPage === 'function') loadBooksPage();
  if (typeof loadAccountPage === 'function') loadAccountPage();
  if (typeof loadAdminPanel === 'function') loadAdminPanel();
  if (typeof loadAuthorPage === 'function') loadAuthorPage();
  if (typeof loadBookDetail === 'function') loadBookDetail();
}

// ===== APPLY LANGUAGE =====
function applyLang(lang) {
  const t = translations[lang];
  const isAr = lang === 'ar';

  // Toggle RTL
  document.body.classList.toggle('rtl', isAr);
  document.documentElement.setAttribute('lang', lang);

  // Update toggle button
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = isAr ? 'E' : 'ع';

  // Update search placeholder
  const search = document.getElementById('navSearch');
  if (search) search.placeholder = t['nav-search'];

  // Apply all data-lang attributes
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  // Admin modals
  const ar2 = lang === 'ar';
  const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  setText('banModalTitle', ar2 ? 'حظر مستخدم' : 'Ban User');
  setText('banModalSubtitle', ar2 ? 'اختر مدة الحظر:' : 'Choose how long to ban this user:');
  setText('banByHoursLabel', ar2 ? 'حظر بالساعات' : 'Ban by Hours');
  setText('banByHoursDesc', ar2 ? 'ينتهي تلقائياً بعد الساعات المحددة' : 'Auto-removes after set hours');
  setText('banByDateLabel', ar2 ? 'حظر بالتاريخ' : 'Ban by Date');
  setText('banByDateDesc', ar2 ? 'ينتهي تلقائياً في التاريخ المحدد' : 'Auto-removes on specific date');
  setText('hoursLabel', ar2 ? 'عدد الساعات:' : 'Number of hours:');
  setText('dateLabel', ar2 ? 'حظر حتى تاريخ:' : 'Ban until date:');
  setText('banCancelBtn', ar2 ? 'إلغاء' : 'Cancel');
  setText('banConfirmText', ar2 ? 'تأكيد الحظر' : 'Confirm Ban');
  setText('deleteModalTitle', ar2 ? 'حذف' : 'Delete');
  setText('deleteCancelBtn', ar2 ? 'لا، إلغاء' : 'No, Cancel');
  setText('deleteConfirmText', ar2 ? 'نعم، احذف' : 'Yes, Delete');
}

// ===== LOAD LANGUAGE =====
function loadLang() {
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
}