import React, { useEffect } from 'react'
import { useImgLoad } from '../../utils/imgLoad'
import './index.scss'

function Book(props) {
  const [src, setSrc] = useImgLoad()
  let url = 'http://pt.yuenov.com:15555/file/group1/book/5e924ea8-19ac-4322-97b8-3b088f428b7b.jpg'
  useEffect(() => {
    setSrc(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  return (
    <div className="book">
      <img src={src} alt="" className="book__img" />
      <div className="book__cover">
        <div className="book__content">
          <div className="book__title">BIG MAGIC</div>
          <div className="book__desc">it is a book about someone's poor life</div>
        </div>
      </div>
    </div>
  )
}

export default Book
