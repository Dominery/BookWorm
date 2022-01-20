interface ChapterInfo {
  id: string
  content: string
  name: string
}
interface BookInfo {
  imgUrl: string
  author: string
  title: string
  desc: string
  categoryName: string
  bookId: number
  word: string
  [prop: string]: string | number
}
interface BookDetail {
  imgUrl: string
  author: string
  title: string
  desc: string
  categoryName: string
  chapterNum: string
  bookId: number
  chapterName: string
  time: number
  state: string
  word: string
  recommend: BookInfo[]
}
interface BookTypes {
  type: string
  categoryName: string
  bookList: BookInfo[]
}
interface CatalogueInfo {
  id: string
  name: string
  v: number
}

export { ChapterInfo, BookTypes, BookInfo, CatalogueInfo, BookDetail }
