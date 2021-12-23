enum Navigation {
  BookShelf = '/bookshelf',
  My = '/my',
  Discover = '/',
  Category = '/category',
  BOOK = '/book/:id',
  CategoryMore = '/discover/more/:type',
  BookDetailMore = '/book/more/:id',
  Catalogue = '/catalogue/:id',
  Chapter = '/chapter/:id',
}
enum ICONS {
  RIGHT_ARROW = '&#xe605;',
  SEQUENCE = '&#xe61f;',
  INVERSE = '&#xe620;',
  COLOR = '&#xe760;',
  FONT_SIZE = '&#xe648;',
  FONT_SIZE_UP = '&#xe65b;',
  FONT_SIZE_DOWN = '&#xe65a;',
  TOGGLE = '&#xe689;',
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

const CHAPTER_COLORS = [
  {
    background: 'white',
    color: '#333',
  },
  {
    background: '#f6f1e7',
    color: '#333',
  },
  {
    background: '#f6e8e6',
    color: '#333',
  },
  {
    background: '#464747',
    color: '#808080',
  },
  {
    background: '#e8f2f4',
    color: '#333',
  },
  {
    background: '#eaf3e9',
    color: '#333',
  },
  {
    background: '#f6f5ed',
    color: '#333',
  },
]
export { Navigation, navData as nav, ICONS, categoryInfo, CHAPTER_COLORS }
