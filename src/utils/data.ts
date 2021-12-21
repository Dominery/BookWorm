enum Navigation {
  BookShelf = '/bookshelf',
  My = '/my',
  Discover = '/discover',
  Category = '/category',
  BOOK = '/',
  CategoryMore = '/discover/more/:type',
  BookDetailMore = '/book/more/:id',
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

const categoryInfo = [
  {
    channelName: '男生',
    channelId: 1,
    categories: [
      {
        categoryId: 1,
        categoryName: '玄幻小说',
      },
      {
        categoryId: 2,
        categoryName: '修真小说',
      },
      {
        categoryId: 3,
        categoryName: '都市小说',
      },
      {
        categoryId: 5,
        categoryName: '网游小说',
      },
      {
        categoryId: 6,
        categoryName: '科幻灵异',
      },
      {
        categoryId: 7,
        categoryName: '历史小说',
      },
      {
        categoryId: 9,
        categoryName: '其他小说',
      },
    ],
  },
  {
    channelName: '女生',
    channelId: 2,
    categories: [
      {
        categoryId: 3,
        categoryName: '都市小说',
      },
      {
        categoryId: 6,
        categoryName: '科幻灵异',
      },
      {
        categoryId: 8,
        categoryName: '言情小说',
      },
      {
        categoryId: 10,
        categoryName: '女生小说',
      },
      {
        categoryId: 9,
        categoryName: '其他小说',
      },
    ],
  },
]
export { Navigation, navData as nav, ICONS, categoryInfo }
