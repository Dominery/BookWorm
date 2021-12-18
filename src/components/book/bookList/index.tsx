import React from 'react'
import { booksWithDesc } from '../bookGenerator'
import { BookInfo } from '../conf'

import './index.scss'

function BookList(props: { className?: string; books: BookInfo[] }) {
  const { className, books } = props
  return <div className={`book-list ${className}`}>{booksWithDesc(books, books.length, 'book-list__item')}</div>
}

export default BookList
