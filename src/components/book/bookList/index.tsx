import React, { useRef, useState } from 'react'
import { useTouch } from 'utils/touch'
import { LoadingIcon } from '../../index'
import { booksWithDesc } from '../bookGenerator'
import { BookInfo } from '../conf'

import './index.scss'

function BookList(props: { className?: string; books: BookInfo[]; onPullUp?: () => Promise<void> }) {
  const { className = '', books, onPullUp } = props
  const bookList = useRef()
  const [loading, setLoading] = useState(false)
  const [touchStart, touchEnd] = useTouch({
    up: pullUp,
  })
  return (
    <div
      className={`book-list ${className}`}
      ref={bookList}
      onClick={(e) => {
        ;(window as any).book = bookList
      }}
      onTouchEnd={touchEnd}
      onTouchStart={touchStart}
    >
      {booksWithDesc(books, 'book-list__item')}
      {onPullUp && loading && (
        <div className="book-list__item loading-container">
          <LoadingIcon />
        </div>
      )}
    </div>
  )
  function pullUp() {
    const distance = 10
    const dom = bookList.current as any
    const { scrollHeight, clientHeight, scrollTop } = dom
    console.log('onPullUp')
    if (Math.abs(scrollTop + clientHeight - scrollHeight) >= distance) {
      return
    }
    if (!loading) {
      setLoading(true)
      onPullUp?.().finally(() => {
        console.log('finally')
        setLoading(false)
      })
    }
  }
}

export default BookList
