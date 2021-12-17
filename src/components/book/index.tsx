import React from 'react'
import { Link } from 'react-router-dom'
import BookImage from '../bookImage/index'

import './index.scss'

function Book(props: { url: string; children: JSX.Element; id: number; className?: string; vertical?: boolean }) {
  const { url, children, id, vertical = false, className = '' } = props
  return (
    <Link to={`/book/${id}`} className={`book ${className} ${vertical ? 'book--vertical' : ''}`}>
      <BookImage src={url} className="book__img" />
      <div className="book__profile">{children}</div>
    </Link>
  )
}

export default Book
