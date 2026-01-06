export type Language = 'en' | 'ru' | 'es' | 'fr';

export interface Translations {
  // Auth Page
  authTitle: string;
  authSubtitle: string;
  login: string;
  register: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  loginButton: string;
  registerButton: string;
  demoText: string;
  errorInvalidCredentials: string;
  errorFillAllFields: string;
  errorUsernameExists: string;

  // Navigation
  home: string;
  search: string;
  cart: string;
  favorites: string;
  account: string;

  // Search Page
  searchTitle: string;
  searchPlaceholder: string;
  forHer: string;
  forHim: string;
  back: string;
  filters: string;
  clearAll: string;
  sortByPrice: string;
  priceLowToHigh: string;
  priceHighToLow: string;
  size: string;
  color: string;
  productsFound: string;
  noProductsFound: string;
  noProductsFoundQuery: string;
  tryDifferentSearch: string;

  // Product Detail
  addToCart: string;
  addToFavorites: string;
  removeFromFavorites: string;
  selectSize: string;
  selectColor: string;
  description: string;
  details: string;
  brand: string;
  close: string;
  mustBeInFavorites: string;

  // Cart Page
  myCart: string;
  cartEmpty: string;
  startShopping: string;
  total: string;
  checkout: string;
  remove: string;

  // Favorites Page
  myFavorites: string;
  favoritesEmpty: string;
  exploreProducts: string;

  // Account Page
  myAccount: string;
  myOrders: string;
  profileSettings: string;
  security: string;
  languageAndRegion: string;
  paymentMethods: string;
  logout: string;
  editProfile: string;
  saveChanges: string;
  cancel: string;
  changePassword: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  language: string;
  country: string;
  savePreferences: string;
  preferredPaymentMethod: string;
  savePaymentMethod: string;
  paymentSecure: string;
  trackPurchases: string;
  manageAccount: string;
  changePasswordTitle: string;
  customizePreferences: string;
  managePaymentOptions: string;
  items: string;
  delivered: string;
  shipped: string;
  pending: string;
  passwordsDoNotMatch: string;
  incorrectPassword: string;
  passwordChanged: string;

  // Countries
  usa: string;
  russia: string;
  france: string;
  spain: string;

  // Languages
  english: string;
  russian: string;
  french: string;
  spanish: string;

  // Payment Methods
  notSet: string;
  creditCard: string;
  debitCard: string;
  paypal: string;
  applePay: string;
  googlePay: string;

  // Home Page
  welcome: string;
  shopByCategory: string;
  newArrivals: string;
  viewAll: string;
  discoverStyle: string;
  aboutStore: string;
  aboutStoreDesc1: string;
  aboutStoreDesc2: string;
  aboutStoreDesc3: string;
  ourJourney: string;
  foundedTitle: string;
  foundedDesc: string;
  expansionTitle: string;
  expansionDesc: string;
  aiPoweredTitle: string;
  aiPoweredDesc: string;
  aiRecommendations: string;
  aiRecommendationsDesc: string;
  viewCollection: string;
  productsCount: string;
  customersCount: string;
  rating: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Auth Page
    authTitle: 'StyleHub',
    authSubtitle: 'Your fashion store',
    login: 'Login',
    register: 'Register',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    registerButton: 'Create Account',
    demoText: 'Demo: use any username/password for testing',
    errorInvalidCredentials: 'Invalid username or password',
    errorFillAllFields: 'Fill in all fields',
    errorUsernameExists: 'Username already exists',

    // Navigation
    home: 'Home',
    search: 'Search',
    cart: 'Cart',
    favorites: 'Favorites',
    account: 'Account',

    // Search Page
    searchTitle: 'Search',
    searchPlaceholder: 'Search for clothing...',
    forHer: 'For Her',
    forHim: 'For Him',
    back: 'Back',
    filters: 'Filters',
    clearAll: 'Clear All',
    sortByPrice: 'Sort by Price',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low',
    size: 'Size',
    color: 'Color',
    productsFound: 'products found',
    noProductsFound: 'No products found',
    noProductsFoundQuery: 'for',
    tryDifferentSearch: 'Try a different search',

    // Product Detail
    addToCart: 'Add to Cart',
    addToFavorites: 'Add to Favorites',
    removeFromFavorites: 'Remove from Favorites',
    selectSize: 'Select Size',
    selectColor: 'Select Color',
    description: 'Description',
    details: 'Details',
    brand: 'Brand',
    close: 'Close',
    mustBeInFavorites: 'Please add this item to favorites before adding to cart',

    // Cart Page
    myCart: 'My Cart',
    cartEmpty: 'Your cart is empty',
    startShopping: 'Start shopping to add items',
    total: 'Total',
    checkout: 'Checkout',
    remove: 'Remove',

    // Favorites Page
    myFavorites: 'My Favorites',
    favoritesEmpty: 'No favorites yet',
    exploreProducts: 'Explore products and add them to favorites',

    // Account Page
    myAccount: 'My Account',
    myOrders: 'My Orders',
    profileSettings: 'Profile Settings',
    security: 'Security',
    languageAndRegion: 'Language & Region',
    paymentMethods: 'Payment Methods',
    logout: 'Logout',
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm New Password',
    language: 'Language',
    country: 'Country',
    savePreferences: 'Save Preferences',
    preferredPaymentMethod: 'Preferred Payment Method',
    savePaymentMethod: 'Save Payment Method',
    paymentSecure: 'Payment details are securely stored and encrypted',
    trackPurchases: 'Track your purchases',
    manageAccount: 'Manage your account information',
    changePasswordTitle: 'Change your password',
    customizePreferences: 'Customize your preferences',
    managePaymentOptions: 'Manage your payment options',
    items: 'items',
    delivered: 'delivered',
    shipped: 'shipped',
    pending: 'pending',
    passwordsDoNotMatch: 'Passwords do not match',
    incorrectPassword: 'Current password is incorrect',
    passwordChanged: 'Password changed successfully',

    // Countries
    usa: 'United States',
    russia: 'Russia',
    france: 'France',
    spain: 'Spain',

    // Languages
    english: 'English',
    russian: 'Russian',
    french: 'French',
    spanish: 'Spanish',

    // Payment Methods
    notSet: 'Not set',
    creditCard: 'Credit Card',
    debitCard: 'Debit Card',
    paypal: 'PayPal',
    applePay: 'Apple Pay',
    googlePay: 'Google Pay',

    // Home Page
    welcome: 'Welcome',
    shopByCategory: 'Shop by Category',
    newArrivals: 'New Arrivals',
    viewAll: 'View All',
    discoverStyle: 'Discover your perfect style',
    aboutStore: 'About StyleHub',
    aboutStoreDesc1: 'Welcome to StyleHub, your premier destination for contemporary fashion. Since our founding in 2020, we\'ve been committed to bringing you the latest trends and timeless classics from around the world.',
    aboutStoreDesc2: 'Our curated collection features carefully selected pieces that blend quality, style, and affordability. From casual everyday wear to elegant evening attire, we have something for every occasion and every style.',
    aboutStoreDesc3: 'We believe fashion should be accessible to everyone. That\'s why we work directly with designers and manufacturers to bring you exceptional pieces at competitive prices, without compromising on quality or ethics.',
    ourJourney: 'Our Journey',
    foundedTitle: 'Founded in New York',
    foundedDesc: 'StyleHub was born from a passion for making high-quality fashion accessible to everyone.',
    expansionTitle: 'Global Expansion',
    expansionDesc: 'We expanded our operations to serve customers in over 50 countries worldwide.',
    aiPoweredTitle: 'AI-Powered Shopping',
    aiPoweredDesc: 'Launched our revolutionary AI recommendation system for personalized styling.',
    aiRecommendations: 'AI Recommendations for You',
    aiRecommendationsDesc: 'Our AI has curated these looks based on your style preferences and trending fashion.',
    viewCollection: 'View Collection',
    productsCount: 'Products',
    customersCount: 'Customers',
    rating: 'Rating',
  },
  ru: {
    // Auth Page
    authTitle: 'StyleHub',
    authSubtitle: 'Ваш модный магазин',
    login: 'Вход',
    register: 'Регистрация',
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Email адрес',
    username: 'Логин',
    password: 'Пароль',
    loginButton: 'Войти',
    registerButton: 'Создать аккаунт',
    demoText: 'Демо: используйте любой логин/пароль для тестирования',
    errorInvalidCredentials: 'Неверный логин или пароль',
    errorFillAllFields: 'Заполните все поля',
    errorUsernameExists: 'Логин уже существует',

    // Navigation
    home: 'Главная',
    search: 'Поиск',
    cart: 'Корзина',
    favorites: 'Избранное',
    account: 'Аккаунт',

    // Search Page
    searchTitle: 'Поиск',
    searchPlaceholder: 'Поиск одежды...',
    forHer: 'Для нее',
    forHim: 'Для него',
    back: 'Назад',
    filters: 'Фильтры',
    clearAll: 'Оч��стить все',
    sortByPrice: 'Сортировка по цене',
    priceLowToHigh: 'Цена: от низкой к высокой',
    priceHighToLow: 'Цена: от высокой к низкой',
    size: 'Размер',
    color: 'Цвет',
    productsFound: 'товаров найдено',
    noProductsFound: 'Товары не найдены',
    noProductsFoundQuery: 'по запросу',
    tryDifferentSearch: 'Попробуйте изменить поисковый запрос',

    // Product Detail
    addToCart: 'Добавить в корзину',
    addToFavorites: 'Добавить в избранное',
    removeFromFavorites: 'Удалить из избранного',
    selectSize: 'Выберите размер',
    selectColor: 'Выберите цвет',
    description: 'Описание',
    details: 'Детали',
    brand: 'Бренд',
    close: 'Закрыть',
    mustBeInFavorites: 'Пожалуйста, добавьте товар в избранное перед добавлением в корзину',

    // Cart Page
    myCart: 'Моя корзина',
    cartEmpty: 'Ваша корзина пуста',
    startShopping: 'Начните покупки, чтобы добавить товары',
    total: 'Итого',
    checkout: 'Оформить заказ',
    remove: 'Удалить',

    // Favorites Page
    myFavorites: 'Мои избранные',
    favoritesEmpty: 'Нет избранных товаров',
    exploreProducts: 'Изучайте товары и добавляйте их в избранное',

    // Account Page
    myAccount: 'Мой аккаунт',
    myOrders: 'Мои заказы',
    profileSettings: 'Настройки профиля',
    security: 'Безопасность',
    languageAndRegion: 'Язык и регион',
    paymentMethods: 'Способы оплаты',
    logout: 'Выйти',
    editProfile: 'Редактировать профиль',
    saveChanges: 'Сохранить изменения',
    cancel: 'Отмена',
    changePassword: 'Изменить пароль',
    currentPassword: 'Текущий пароль',
    newPassword: 'Новый пароль',
    confirmPassword: 'Подтвердите новый пароль',
    language: 'Язык',
    country: 'Страна',
    savePreferences: 'Сохранить настройки',
    preferredPaymentMethod: 'Предпочтительный способ оплаты',
    savePaymentMethod: 'Сохранить способ оплаты',
    paymentSecure: 'Платежные данные надежно хранятся и зашифрованы',
    trackPurchases: 'Отслеживайте ваши покупки',
    manageAccount: 'Управление информацией аккаунта',
    changePasswordTitle: 'Измените ваш пароль',
    customizePreferences: 'Настройте ваши предпочтения',
    managePaymentOptions: 'Управление способами оплаты',
    items: 'товаров',
    delivered: 'доставлен',
    shipped: 'отправлен',
    pending: 'ожидает',
    passwordsDoNotMatch: 'Пароли не совпадают',
    incorrectPassword: 'Текущий пароль неверен',
    passwordChanged: 'Пароль успешно изменен',

    // Countries
    usa: 'США',
    russia: 'Россия',
    france: 'Франция',
    spain: 'Испания',

    // Languages
    english: 'Английский',
    russian: 'Русский',
    french: 'Французский',
    spanish: 'Испанский',

    // Payment Methods
    notSet: 'Не указано',
    creditCard: 'Кредитная карта',
    debitCard: 'Дебетовая карта',
    paypal: 'PayPal',
    applePay: 'Apple Pay',
    googlePay: 'Google Pay',

    // Home Page
    welcome: 'Добро пожаловать',
    shopByCategory: 'Покупки по категориям',
    newArrivals: 'Новинки',
    viewAll: 'Посмотреть все',
    discoverStyle: 'Откройте свой идеальный стиль',
    aboutStore: 'О магазине StyleHub',
    aboutStoreDesc1: 'Добро пожаловать в StyleHub - ваш главный пункт назначения для современной моды. С момента нашего основания в 2020 году мы стремимся предоставлять вам последние тренды и неподвластную времени классику со всего мира.',
    aboutStoreDesc2: 'Наша тщательно подобранная коллекция включает в себя отобранные вещи, которые сочетают качество, стиль и доступность. От повседневной одежды до элегантных вечерних нарядов - у нас есть что-то для каждого случая и каждого стиля.',
    aboutStoreDesc3: 'Мы верим, что мода должна быть доступна каждому. Именно поэтому мы работаем напрямую с дизайнерами и производителями, чтобы предложить вам исключительные вещи по конкурентным ценам, не идя на компромисс в качестве или этике.',
    ourJourney: 'Наша история',
    foundedTitle: 'Основан в Нью-Йорке',
    foundedDesc: 'StyleHub родился из страсти сделать высококачественную моду доступной для каждого.',
    expansionTitle: 'Глобальная экспансия',
    expansionDesc: 'Мы расширили наши операции для обслуживания клиентов в более чем 50 странах по всему миру.',
    aiPoweredTitle: 'Покупки с AI',
    aiPoweredDesc: 'Запущена наша революционная система AI-рекомендаций для персонализированного стиля.',
    aiRecommendations: 'AI рекомендации для вас',
    aiRecommendationsDesc: 'Наш AI подобрал эти образы на основе ваших стилевых предпочтений и модных трендов.',
    viewCollection: 'Посмотреть коллекцию',
    productsCount: 'Товаров',
    customersCount: 'Клиентов',
    rating: 'Рейтинг',
  },
  es: {
    // Auth Page
    authTitle: 'StyleHub',
    authSubtitle: 'Tu tienda de moda',
    login: 'Iniciar sesión',
    register: 'Registrarse',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    username: 'Usuario',
    password: 'Contraseña',
    loginButton: 'Iniciar sesión',
    registerButton: 'Crear cuenta',
    demoText: 'Demo: use cualquier usuario/contraseña para probar',
    errorInvalidCredentials: 'Usuario o contraseña inválidos',
    errorFillAllFields: 'Complete todos los campos',
    errorUsernameExists: 'El usuario ya existe',

    // Navigation
    home: 'Inicio',
    search: 'Buscar',
    cart: 'Carrito',
    favorites: 'Favoritos',
    account: 'Cuenta',

    // Search Page
    searchTitle: 'Buscar',
    searchPlaceholder: 'Buscar ropa...',
    forHer: 'Para ella',
    forHim: 'Para él',
    back: 'Atrás',
    filters: 'Filtros',
    clearAll: 'Limpiar todo',
    sortByPrice: 'Ordenar por precio',
    priceLowToHigh: 'Precio: Bajo a Alto',
    priceHighToLow: 'Precio: Alto a Bajo',
    size: 'Talla',
    color: 'Color',
    productsFound: 'productos encontrados',
    noProductsFound: 'No se encontraron productos',
    noProductsFoundQuery: 'para',
    tryDifferentSearch: 'Intente una búsqueda diferente',

    // Product Detail
    addToCart: 'Añadir al carrito',
    addToFavorites: 'Añadir a favoritos',
    removeFromFavorites: 'Eliminar de favoritos',
    selectSize: 'Seleccionar talla',
    selectColor: 'Seleccionar color',
    description: 'Descripción',
    details: 'Detalles',
    brand: 'Marca',
    close: 'Cerrar',
    mustBeInFavorites: 'Por favor, añada este artículo a favoritos antes de añadirlo al carrito',

    // Cart Page
    myCart: 'Mi carrito',
    cartEmpty: 'Tu carrito está vacío',
    startShopping: 'Comienza a comprar para añadir artículos',
    total: 'Total',
    checkout: 'Finalizar compra',
    remove: 'Eliminar',

    // Favorites Page
    myFavorites: 'Mis favoritos',
    favoritesEmpty: 'Aún no hay favoritos',
    exploreProducts: 'Explora productos y añádelos a favoritos',

    // Account Page
    myAccount: 'Mi cuenta',
    myOrders: 'Mis pedidos',
    profileSettings: 'Configuración del perfil',
    security: 'Seguridad',
    languageAndRegion: 'Idioma y región',
    paymentMethods: 'Métodos de pago',
    logout: 'Cerrar sesión',
    editProfile: 'Editar perfil',
    saveChanges: 'Guardar cambios',
    cancel: 'Cancelar',
    changePassword: 'Cambiar contraseña',
    currentPassword: 'Contraseña actual',
    newPassword: 'Nueva contraseña',
    confirmPassword: 'Confirmar nueva contraseña',
    language: 'Idioma',
    country: 'País',
    savePreferences: 'Guardar preferencias',
    preferredPaymentMethod: 'Método de pago preferido',
    savePaymentMethod: 'Guardar método de pago',
    paymentSecure: 'Los detalles de pago se almacenan de forma segura y encriptada',
    trackPurchases: 'Rastrea tus compras',
    manageAccount: 'Gestiona la información de tu cuenta',
    changePasswordTitle: 'Cambia tu contraseña',
    customizePreferences: 'Personaliza tus preferencias',
    managePaymentOptions: 'Gestiona tus opciones de pago',
    items: 'artículos',
    delivered: 'entregado',
    shipped: 'enviado',
    pending: 'pendiente',
    passwordsDoNotMatch: 'Las contraseñas no coinciden',
    incorrectPassword: 'La contraseña actual es incorrecta',
    passwordChanged: 'Contraseña cambiada exitosamente',

    // Countries
    usa: 'Estados Unidos',
    russia: 'Rusia',
    france: 'Francia',
    spain: 'España',

    // Languages
    english: 'Inglés',
    russian: 'Ruso',
    french: 'Francés',
    spanish: 'Español',

    // Payment Methods
    notSet: 'No configurado',
    creditCard: 'Tarjeta de crédito',
    debitCard: 'Tarjeta de débito',
    paypal: 'PayPal',
    applePay: 'Apple Pay',
    googlePay: 'Google Pay',

    // Home Page
    welcome: 'Bienvenido',
    shopByCategory: 'Comprar por categoría',
    newArrivals: 'Novedades',
    viewAll: 'Ver todo',
    discoverStyle: 'Descubre tu estilo perfecto',
    aboutStore: 'Acerca de StyleHub',
    aboutStoreDesc1: 'Bienvenido a StyleHub, tu destino principal para la moda contemporánea. Desde nuestra fundación en 2020, nos hemos comprometido a traerte las últimas tendencias y clásicos atemporales de todo el mundo.',
    aboutStoreDesc2: 'Nuestra colección seleccionada presenta piezas cuidadosamente elegidas que combinan calidad, estilo y asequibilidad. Desde ropa casual diaria hasta atuendos elegantes para la noche, tenemos algo para cada ocasión y cada estilo.',
    aboutStoreDesc3: 'Creemos que la moda debe ser accesible para todos. Por eso trabajamos directamente con diseñadores y fabricantes para ofrecerte piezas excepcionales a precios competitivos, sin comprometer la calidad ni la ética.',
    ourJourney: 'Nuestro viaje',
    foundedTitle: 'Fundado en Nueva York',
    foundedDesc: 'StyleHub nació de la pasión por hacer que la moda de alta calidad sea accesible para todos.',
    expansionTitle: 'Expansión global',
    expansionDesc: 'Expandimos nuestras operaciones para servir a clientes en más de 50 países en todo el mundo.',
    aiPoweredTitle: 'Compras con IA',
    aiPoweredDesc: 'Lanzamos nuestro revolucionario sistema de recomendaciones de IA para estilos personalizados.',
    aiRecommendations: 'Recomendaciones de IA para ti',
    aiRecommendationsDesc: 'Nuestra IA ha seleccionado estos looks basándose en tus preferencias de estilo y la moda actual.',
    viewCollection: 'Ver colección',
    productsCount: 'Productos',
    customersCount: 'Clientes',
    rating: 'Calificación',
  },
  fr: {
    // Auth Page
    authTitle: 'StyleHub',
    authSubtitle: 'Votre magasin de mode',
    login: 'Connexion',
    register: 'S\'inscrire',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Adresse e-mail',
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    loginButton: 'Se connecter',
    registerButton: 'Créer un compte',
    demoText: 'Démo: utilisez n\'importe quel nom d\'utilisateur/mot de passe pour tester',
    errorInvalidCredentials: 'Nom d\'utilisateur ou mot de passe invalide',
    errorFillAllFields: 'Remplissez tous les champs',
    errorUsernameExists: 'Le nom d\'utilisateur existe déjà',

    // Navigation
    home: 'Accueil',
    search: 'Rechercher',
    cart: 'Panier',
    favorites: 'Favoris',
    account: 'Compte',

    // Search Page
    searchTitle: 'Rechercher',
    searchPlaceholder: 'Rechercher des vêtements...',
    forHer: 'Pour elle',
    forHim: 'Pour lui',
    back: 'Retour',
    filters: 'Filtres',
    clearAll: 'Tout effacer',
    sortByPrice: 'Trier par prix',
    priceLowToHigh: 'Prix: Bas à Élevé',
    priceHighToLow: 'Prix: Élevé à Bas',
    size: 'Taille',
    color: 'Couleur',
    productsFound: 'produits trouvés',
    noProductsFound: 'Aucun produit trouvé',
    noProductsFoundQuery: 'pour',
    tryDifferentSearch: 'Essayez une recherche différente',

    // Product Detail
    addToCart: 'Ajouter au panier',
    addToFavorites: 'Ajouter aux favoris',
    removeFromFavorites: 'Retirer des favoris',
    selectSize: 'Sélectionner la taille',
    selectColor: 'Sélectionner la couleur',
    description: 'Description',
    details: 'Détails',
    brand: 'Marque',
    close: 'Fermer',
    mustBeInFavorites: 'Veuillez ajouter cet article aux favoris avant de l\'ajouter au panier',

    // Cart Page
    myCart: 'Mon panier',
    cartEmpty: 'Votre panier est vide',
    startShopping: 'Commencez vos achats pour ajouter des articles',
    total: 'Total',
    checkout: 'Passer la commande',
    remove: 'Supprimer',

    // Favorites Page
    myFavorites: 'Mes favoris',
    favoritesEmpty: 'Pas encore de favoris',
    exploreProducts: 'Explorez les produits et ajoutez-les aux favoris',

    // Account Page
    myAccount: 'Mon compte',
    myOrders: 'Mes commandes',
    profileSettings: 'Paramètres du profil',
    security: 'Sécurité',
    languageAndRegion: 'Langue et région',
    paymentMethods: 'Méthodes de paiement',
    logout: 'Déconnexion',
    editProfile: 'Modifier le profil',
    saveChanges: 'Enregistrer les modifications',
    cancel: 'Annuler',
    changePassword: 'Changer le mot de passe',
    currentPassword: 'Mot de passe actuel',
    newPassword: 'Nouveau mot de passe',
    confirmPassword: 'Confirmer le nouveau mot de passe',
    language: 'Langue',
    country: 'Pays',
    savePreferences: 'Enregistrer les préférences',
    preferredPaymentMethod: 'Méthode de paiement préférée',
    savePaymentMethod: 'Enregistrer la méthode de paiement',
    paymentSecure: 'Les détails de paiement sont stockés en toute sécurité et cryptés',
    trackPurchases: 'Suivez vos achats',
    manageAccount: 'Gérez les informations de votre compte',
    changePasswordTitle: 'Changez votre mot de passe',
    customizePreferences: 'Personnalisez vos préférences',
    managePaymentOptions: 'Gérez vos options de paiement',
    items: 'articles',
    delivered: 'livré',
    shipped: 'expédié',
    pending: 'en attente',
    passwordsDoNotMatch: 'Les mots de passe ne correspondent pas',
    incorrectPassword: 'Le mot de passe actuel est incorrect',
    passwordChanged: 'Mot de passe changé avec succès',

    // Countries
    usa: 'États-Unis',
    russia: 'Russie',
    france: 'France',
    spain: 'Espagne',

    // Languages
    english: 'Anglais',
    russian: 'Russe',
    french: 'Français',
    spanish: 'Espagnol',

    // Payment Methods
    notSet: 'Non défini',
    creditCard: 'Carte de crédit',
    debitCard: 'Carte de débit',
    paypal: 'PayPal',
    applePay: 'Apple Pay',
    googlePay: 'Google Pay',

    // Home Page
    welcome: 'Bienvenue',
    shopByCategory: 'Acheter par catégorie',
    newArrivals: 'Nouveautés',
    viewAll: 'Voir tout',
    discoverStyle: 'Découvrez votre style parfait',
    aboutStore: 'À propos de StyleHub',
    aboutStoreDesc1: 'Bienvenue chez StyleHub, votre destination principale pour la mode contemporaine. Depuis notre création en 2020, nous nous engageons à vous apporter les dernières tendances et les classiques intemporels du monde entier.',
    aboutStoreDesc2: 'Notre collection soigneusement sélectionnée présente des pièces choisies avec soin qui allient qualité, style et accessibilité. Des tenues décontractées de tous les jours aux tenues élégantes de soirée, nous avons quelque chose pour chaque occasion et chaque style.',
    aboutStoreDesc3: 'Nous croyons que la mode devrait être accessible à tous. C\'est pourquoi nous travaillons directement avec des designers et des fabricants pour vous apporter des pièces exceptionnelles à des prix compétitifs, sans compromettre la qualité ou l\'éthique.',
    ourJourney: 'Notre parcours',
    foundedTitle: 'Fondé à New York',
    foundedDesc: 'StyleHub est né d\'une passion pour rendre la mode de haute qualité accessible à tous.',
    expansionTitle: 'Expansion mondiale',
    expansionDesc: 'Nous avons étendu nos opérations pour servir des clients dans plus de 50 pays dans le monde.',
    aiPoweredTitle: 'Shopping avec IA',
    aiPoweredDesc: 'Lancement de notre système révolutionnaire de recommandations IA pour un style personnalisé.',
    aiRecommendations: 'Recommandations IA pour vous',
    aiRecommendationsDesc: 'Notre IA a sélectionné ces looks en fonction de vos préférences de style et de la mode actuelle.',
    viewCollection: 'Voir la collection',
    productsCount: 'Produits',
    customersCount: 'Clients',
    rating: 'Évaluation',
  }
};

export function getLanguageFromCode(languageCode: string): Language {
  const mapping: Record<string, Language> = {
    'English': 'en',
    'Russian': 'ru',
    'Spanish': 'es',
    'French': 'fr',
  };
  return mapping[languageCode] || 'en';
}