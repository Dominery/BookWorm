import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from 'utils/data'
import BookImage from '../bookImage/index'
import { BookInfo } from '../conf'

import './index.scss'
function BookSlider(props: { className?: string; books: BookInfo[] }) {
  const { className = '', books } = props
  const [active, setActive] = useState(0)
  const bookSum = books.length
  const calculateActive = (num: number) => {
    setActive((active + num + bookSum) % bookSum)
  }
  return (
    <div className={`book-slider ${className}`}>
      <i
        className="iconfont book-slider__left"
        dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}
        onClick={() => calculateActive(-1)}
      ></i>
      <i
        className="iconfont book-slider__right"
        dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}
        onClick={() => calculateActive(1)}
      ></i>
      {createSlideItem(books, active)}
    </div>
  )
}

function createSlideItem(books: BookInfo[], active: number) {
  return books.map((book, index) => (
    <div className={`book-slider-item ${index === active ? 'book-slider-item--active' : ''}`} key={book.bookId}>
      <div className="book-slider-item__info">
        <p className="book-slider-item__subInfo">{book.categoryName}</p>
        <h2 className="book-slider-item__title">{book.title}</h2>
        <p className="book-slider-item__description">{book.desc}</p>
        <Link to={`/book/${book.bookId}`}>了解更多</Link>
      </div>
      <BookImage src={book.imgUrl} className="book-slider-item__img" />
    </div>
  ))
}

export default BookSlider
