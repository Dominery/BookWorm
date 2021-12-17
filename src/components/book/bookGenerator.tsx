import React from 'react'
import { shuffle } from 'utils/random'
import Book from './index'
interface BookInfo {
  url: string
  author: string
  title: string
  desc: string
  category: string
  id: number
  [prop: string]: string | number
}
const BOOK_NAME_CLASS = 'book__title'
const BOOK_DESC_CLASS = 'book__desc'
function shuffleBooks(books: BookInfo[], limit: number) {
  return shuffle(books).slice(0, limit)
}
function mapFunc(contentFunc: (book: BookInfo) => JSX.Element, className: string, vertical = false) {
  return (book) => (
    <Book url={book.url} vertical={vertical} key={book.url} className={className} id={book.id}>
      {contentFunc(book)}
    </Book>
  )
}
function verticalBooks(books: BookInfo[], limit: number, className = '') {
  return shuffleBooks(books, limit).map(
    mapFunc((book) => <p className={BOOK_NAME_CLASS}>{book.title}</p>, className, true),
  )
}

function booksWithDesc(books: BookInfo[], limit: number, className = '') {
  return shuffleBooks(books, limit).map(
    mapFunc(
      (book) => (
        <>
          <p className={BOOK_NAME_CLASS}>{book.title}</p>
          <p>{book.author}</p>
          <p className={BOOK_DESC_CLASS}>{book.desc}</p>
        </>
      ),
      className,
    ),
  )
}

function booksWithoutDesc(books: BookInfo[], limit: number, className = '') {
  return shuffleBooks(books, limit).map(
    mapFunc(
      (book) => (
        <>
          <p className={BOOK_NAME_CLASS}>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.category}</p>
        </>
      ),
      className,
    ),
  )
}

export { verticalBooks, booksWithDesc, booksWithoutDesc }
