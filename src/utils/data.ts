enum Navigation {
  BookShelf = '/bookshelf',
  My = '/my',
  Discover = '/',
  Category = '/categories',
  BOOK = '/book/:id',
  MORE = '/more/:type',
}
enum ICONS {
  RIGHT_ARROW = '&#xe605;',
}
const navData = [
  {
    to: Navigation.BookShelf,
    title: '我的书架',
    icon: '&#xf038;',
    activeIcon: '&#xe601;',
  },
  {
    to: Navigation.Discover,
    title: '发现',
    icon: '&#xe610;',
    activeIcon: '&#xe621;',
  },
  {
    to: Navigation.Category,
    title: '分类',
    icon: '&#xe630;',
    activeIcon: '&#xe6a2;',
  },
  {
    to: Navigation.My,
    title: '我的',
    icon: '&#xe78b;',
    activeIcon: '&#xe78c;',
  },
]

export { Navigation, navData as nav, ICONS }
