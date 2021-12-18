import React from 'react'
import { Link } from 'react-router-dom'
import { BookInfo, BOOK_DESC_CLASS } from './conf'
import Book from './bookLayout/index'

function mapFunc(className: string, vertical = false) {
  return (contentFunc?: (book: BookInfo) => JSX.Element, bookClass = '') =>
    (book: BookInfo) =>
      (
        <Link to={`/book/${book.bookId}`} key={book.bookId} className={className}>
          <Book imgUrl={book.imgUrl} vertical={vertical} title={book.title} className={bookClass}>
            {contentFunc?.(book)}
          </Book>
        </Link>
      )
}
function verticalBooks(books: BookInfo[], className = '') {
  return books.map(mapFunc(className, true)())
}

function booksWithDesc(books: BookInfo[], className = '') {
  return books.map(
    mapFunc(className)((book) => (
      <>
        <p>{book.author}</p>
        <p className={BOOK_DESC_CLASS}>{book.desc}</p>
      </>
    )),
  )
}

function booksWithoutDesc(books: BookInfo[], className = '') {
  return books.map(
    mapFunc(className)((book) => (
      <>
        <p>{book.author}</p>
        <p>{book.categoryName}</p>
      </>
    )),
  )
}

function bookCards(books: BookInfo[], className = '') {
  return books.map(
    mapFunc(className)(
      (book) => (
        <>
          <p>{book.author}</p>
          <p>{book.word}</p>
        </>
      ),
      'book--card',
    ),
  )
}

export { verticalBooks, booksWithDesc, booksWithoutDesc, bookCards }
