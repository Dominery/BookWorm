import React from 'react'
import { Link } from 'react-router-dom'
import { shuffle } from 'utils/random'
import { BookInfo, BOOK_DESC_CLASS } from './conf'
import Book from './bookLayout/index'

function shuffleBooks(books: BookInfo[], limit: number) {
  return shuffle(books).slice(0, limit)
}
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
function verticalBooks(books: BookInfo[], limit: number, className = '') {
  return shuffleBooks(books, limit).map(mapFunc(className, true)())
}

function booksWithDesc(books: BookInfo[], limit: number, className = '') {
  return shuffleBooks(books, limit).map(
    mapFunc(className)((book) => (
      <>
        <p>{book.author}</p>
        <p className={BOOK_DESC_CLASS}>{book.desc}</p>
      </>
    )),
  )
}

function booksWithoutDesc(books: BookInfo[], limit: number, className = '') {
  return shuffleBooks(books, limit).map(
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
