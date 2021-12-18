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
const BOOK_NAME_CLASS = 'book__title'
const BOOK_DESC_CLASS = 'book__desc'

export { BookInfo, BOOK_DESC_CLASS, BOOK_NAME_CLASS }
