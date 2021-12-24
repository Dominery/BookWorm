import React, { useContext } from 'react'
import { BookInfo, ToastContext } from 'components/index'
import { addToBookShelf, isInBookShelf, removeFromBookShelf } from 'utils/storage'

import './index.scss'
function BottomBar(props: { book?: BookInfo }) {
  const setToast = useContext(ToastContext)
  const { book } = props
  return (
    <div className="bottom-bar" style={{ visibility: `${!book ? 'hidden' : 'visible'}` }}>
      {isInBookShelf(book) ? (
        <button className="bottom-bar__item" onClick={removeBook}>
          移出书架
        </button>
      ) : (
        <button className="bottom-bar__item" onClick={addBook}>
          加入书架
        </button>
      )}
      <button className="bottom-bar__item">开始阅读</button>
    </div>
  )
  function addBook() {
    if (!book) return
    if (addToBookShelf(book)) {
      setToast('成功加入书架', 2000)
    } else {
      setToast('已加入书架', 2000)
    }
  }
  function removeBook() {
    if (!book) return
    removeFromBookShelf(book)
    setToast('成功从书架移出', 2000)
  }
}

export default BottomBar
