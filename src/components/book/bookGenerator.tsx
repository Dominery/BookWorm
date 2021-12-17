import React from 'react'
import { Link } from 'react-router-dom'
import { shuffle } from 'utils/random'
import Book from './index'
interface BookInfo {
  imgUrl: string
  author: string
  title: string
  desc: string
  categoryName: string
  bookId: number
  [prop: string]: string | number
}
const BOOK_NAME_CLASS = 'book__title'
const BOOK_DESC_CLASS = 'book__desc'
function shuffleBooks(books: BookInfo[], limit: number) {
  return shuffle(books).slice(0, limit)
}
function mapFunc(contentFunc: (book: BookInfo) => JSX.Element, className: string, vertical = false) {
  return (book: BookInfo) => (
    <Link to={`/book/${book.bookId}`} key={book.bookId} className={className}>
      <Book imgUrl={book.imgUrl} vertical={vertical}>
        {contentFunc(book)}
      </Book>
    </Link>
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
          <p>{book.categoryName}</p>
        </>
      ),
      className,
    ),
  )
}

export { verticalBooks, booksWithDesc, booksWithoutDesc }
