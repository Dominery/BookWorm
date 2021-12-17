import React from 'react'
import BookImage from '../bookImage/index'

import './index.scss'

function Book(props: { url: string; children: JSX.Element; className?: string; vertical?: boolean }) {
  const { url, children, vertical = false, className = '' } = props
  return (
    <div className={`book ${className} ${vertical ? 'book--vertical' : ''}`}>
      <BookImage src={url} className="book__img" />
      <div className="book__profile">{children}</div>
    </div>
  )
}

export default Book
