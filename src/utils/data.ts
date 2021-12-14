enum Navigation {
  BookShelf = '/',
  My = '/my',
  Discover = '/discover',
  Category = '/categories',
}

const sideBar = [
  {
    id: Navigation.BookShelf,
    title: '我的书架',
    icon: '&#xf038;',
  },
  {
    id: Navigation.My,
    title: '浏览历史',
    icon: '&#xe6b4;',
  },
  {
    id: Navigation.Discover,
    title: '发现',
    icon: '&#xe621;',
  },
  {
    id: Navigation.Category,
    title: '分类',
    icon: '&#xe6a2;',
  },
]

export { Navigation, sideBar }
