const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/signup',
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  BRANCH: '/branches',
  PRIVACY: '/privacy',
  MENU: '/menu',
  PROFILE: (username = ':username') => `/profile/${username}`,
};

export default ROUTES;
