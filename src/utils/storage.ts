import { BookInfo } from 'service/type'

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

function isInBookShelf(book: BookInfo) {
  if (!book?.bookId) return
  const bookshelf = getBookShelf()
  const index = bookshelf.findIndex((item) => item.bookId === book.bookId)
  if (index !== -1) return true
  return false
}

function findBookPos(book: BookInfo, bookshelf: BookInfo[]) {
  return bookshelf.findIndex((item) => item.bookId === book.bookId)
}

function addToBookShelf(book: BookInfo) {
  const bookshelf = getBookShelf()
  if (findBookPos(book, bookshelf) !== -1) return false
  bookshelf.push(book)
  set(BOOKSHELF, bookshelf)
  return true
}

function removeFromBookShelf(book: BookInfo) {
  const bookshelf = getBookShelf()
  const pos = findBookPos(book, bookshelf)
  if (pos === -1) return
  bookshelf.splice(pos, 1)
  set(BOOKSHELF, bookshelf)
}

export { getBookShelf, addToBookShelf, isInBookShelf, removeFromBookShelf }
