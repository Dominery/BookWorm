import React from 'react'
import BookImage from '../bookImage/index'

import './index.scss'

function Book(props: { imgUrl: string; title: string; children: JSX.Element; className?: string; vertical?: boolean }) {
  const { imgUrl: url, title, children, vertical = false, className = '' } = props
  return (
    <div className={`book ${className} ${vertical ? 'book--vertical' : ''}`}>
      <BookImage src={url} className="book__img" />
      <div className="book__profile">
        <p className="book__title">{title}</p>
        {children}
      </div>
    </div>
  )
}

export default Book
