enum Navigation {
  BookShelf = '/b',
  History = '/history',
  Discover = '/',
  Category = '/categories',
  Rank = '/rank',
}

const sideBar = [
  {
    id: Navigation.BookShelf,
    title: '我的书架',
    icon: '&#xf038;',
  },
  {
    id: Navigation.History,
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
  {
    id: Navigation.Rank,
    title: '榜单',
    icon: '&#xea06;',
  },
]

export { Navigation, sideBar }
