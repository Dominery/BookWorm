import React from 'react'
import { Book } from 'components/index'

import './index.scss'
interface BookIntro {
  imgUrl: string
  title: string
  author: string
  word: string
  categoryName: string
  state: string
}

function BookIntroduction(props: { bookInfo: BookIntro }) {
  const { imgUrl, title, author, word, categoryName, state } = props.bookInfo
  return (
    <div className="book-introduction overlay" style={{ background: `url(${imgUrl}) 0/cover` }}>
      <Book imgUrl={imgUrl} title={title} className="book-introduction__book scale-2">
        <>
          <p>作者: {author}</p>
          <p>类型: {categoryName}</p>
          <p>状态: {state}</p>
          <p>字数: {word}</p>
        </>
      </Book>
    </div>
  )
}

export default BookIntroduction
