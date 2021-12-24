import { BookInfo } from 'components/index'

const storage = window.localStorage

const set = (key: string, value) => {
  storage.setItem(key, JSON.stringify(value))
}

const get = (key: string) => {
  return JSON.parse(storage.getItem(key))
}

const BOOKSHELF = 'bookshelf'

function getBookShelf(): BookInfo[] {
  return get(BOOKSHELF) ?? []
}

function addToBookShelf(book: BookInfo) {
  const bookshelf = getBookShelf()
  const index = bookshelf.findIndex((item) => item.bookId === book.bookId)
  console.log(index)
  if (index !== -1) return false
  bookshelf.push(book)
  set(BOOKSHELF, bookshelf)
  return true
}

export { getBookShelf, addToBookShelf }
