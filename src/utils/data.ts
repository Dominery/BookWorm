enum Navigation {
  BookShelf = '/',
  My = '/my',
  Discover = '/discover',
  Category = '/categories',
}

const nav = [
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

export { Navigation, nav }
