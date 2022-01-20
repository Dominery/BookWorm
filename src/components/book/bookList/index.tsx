import React, { useRef, useState } from 'react'
import { useOnRequest } from 'utils/request'
import { accessFrequencyProxy } from 'utils/proxy'
import { fromTop, useTouch } from 'utils/touch'
import { BackTopIcon, LoadingIcon } from '../../index'
import { booksWithDesc } from '../bookGenerator'

import './index.scss'
import { BookInfo } from 'service/type'

function BookList(props: { className?: string; books: BookInfo[]; onPullUp: () => Promise<void> }) {
  const { className = '', books, onPullUp } = props
  const bookList = useRef()
  const [loading, pullUp] = useOnRequest(onPullUp)
  const [backTop, setBackTop] = useState(false)
  const [touchStart, touchEnd] = useTouch({
    up: pullUp,
  })
  return (
    <div
      className={`book-list ${className}`}
      ref={bookList}
      onTouchEnd={touchEnd}
      onTouchStart={touchStart}
      onScroll={accessFrequencyProxy(scroll, 100)}
    >
      {booksWithDesc(books, 'book-list__item')}
      {(loading || books) && (
        <div className="book-list__item loading-container">
          <LoadingIcon />
        </div>
      )}
      {<BackTopIcon onClick={toTop} className={backTop ? '' : 'backTop--hide'} />}
    </div>
  )
  function scroll() {
    console.log('scroll')
    if (fromTop(bookList) > 500) {
      setBackTop(true)
    } else {
      setBackTop(false)
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
