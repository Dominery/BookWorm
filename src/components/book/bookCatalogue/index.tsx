import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from 'utils/data'
import BookFlip from '../bookFlip/index'

import './index.scss'
interface CatalogueInfo {
  id: string
  name: string
  v: number
}

function BookCatalogue(props: { catalogue: CatalogueInfo[]; className?: string; bookId: number }) {
  const [sequence, SetSequence] = useState(true)
  const [catalogue, setCatalogue] = useState(props.catalogue)
  const { className = '', bookId } = props
  useEffect(() => {
    setCatalogue(props.catalogue)
  }, [props])
  return (
    <div className={`book-catalogue ${className}`}>
      <div className="book-catalogue__info">
        <span>共有{catalogue.length}章</span>
        <i
          className="iconfont"
          dangerouslySetInnerHTML={{ __html: sequence ? ICONS.SEQUENCE : ICONS.INVERSE }}
          onClick={sequenceInverse}
        ></i>
      </div>
      <div className="book-catalogue__content">
        {catalogue.length === 0 ? <BookFlip /> : createCatalogue(catalogue, bookId)}
      </div>
    </div>
  )
  function sequenceInverse() {
    SetSequence(!sequence)
    setCatalogue(catalogue.reverse())
  }
}

function createCatalogue(catalogue: CatalogueInfo[], bookId: number) {
  return catalogue.map((item) => (
    <Link
      to={{
        pathname: `/chapter/${bookId}`,
        state: {
          chapterIdList: catalogue,
          v: item.v,
          id: item.id,
        },
      }}
      className="book-catalogue__item"
      href="#"
      key={item.id}
    >
      {item.name}
    </Link>
  ))
}

export default BookCatalogue
