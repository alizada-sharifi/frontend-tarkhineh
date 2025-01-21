const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/signup',
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  BRANCH: '/branches',
  MENU: '/menu',
  PROFILE: (username = ':username') => `/profile/${username}`,

  FAQ: '/faq',
  TERMS: '/terms',
  PRIVACY: '/privacy',

  // Social address
  TELEGRAM: '/',
  X: '/',
  INSTAGRAM: '/',
};

export default ROUTES;
