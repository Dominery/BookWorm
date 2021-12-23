import React, { useRef, useState } from 'react'
import { fromTop, fromBottom, useTouch } from 'utils/touch'
import { BackTopIcon, LoadingIcon } from '../../index'
import { booksWithDesc } from '../bookGenerator'
import { BookInfo } from '../conf'

import './index.scss'

function BookList(props: { className?: string; books: BookInfo[]; onPullUp?: () => Promise<void> }) {
  const { className = '', books, onPullUp } = props
  const bookList = useRef()
  const [loading, setLoading] = useState(false)
  const [backTop, setBackTop] = useState(false)
  const [touchStart, touchEnd] = useTouch({
    up: pullUp,
    bottom: () => {
      if (!fromTop(500, bookList)) {
        setBackTop(false)
      }
    },
  })
  return (
    <div
      className={`book-list ${className}`}
      ref={bookList}
      onTouchEnd={touchEnd}
      onTouchStart={touchStart}
      onScroll={() => console.log('scroll')}
    >
      {booksWithDesc(books, 'book-list__item')}
      {onPullUp && loading && (
        <div className="book-list__item loading-container">
          <LoadingIcon />
        </div>
      )}
      {<BackTopIcon onClick={toTop} className={backTop ? '' : 'backTop--hide'} />}
    </div>
  )
  function pullUp() {
    if (fromTop(500, bookList)) {
      setBackTop(true)
    }
    if (!fromBottom(10, bookList)) {
      return
    }

    if (!loading) {
      setLoading(true)
      onPullUp?.().finally(() => {
        setLoading(false)
      })
    }
  }
  function toTop() {
    const dom = bookList.current as any
    dom.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    setBackTop(false)
  }
}

export default BookList
