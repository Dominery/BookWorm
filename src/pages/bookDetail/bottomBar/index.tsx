import React, { useContext } from 'react'
import { BookInfo, ToastContext } from 'components/index'
import { addToBookShelf } from 'utils/storage'

import './index.scss'
function BottomBar(props: { book?: BookInfo }) {
  const setToast = useContext(ToastContext)
  return (
    <div className="bottom-bar">
      <button className="bottom-bar__item" onClick={addBook}>
        加入书架
      </button>
      <button className="bottom-bar__item">开始阅读</button>
    </div>
  )
  function addBook() {
    if (!props.book) return
    if (addToBookShelf(props.book)) {
      setToast('成功加入书架', 2000)
    } else {
      setToast('已加入书架', 2000)
    }
  }
}

export default BottomBar
