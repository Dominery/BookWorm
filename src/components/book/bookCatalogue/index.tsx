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
const LIMIT_PAGE_NUM = 100

function BookCatalogue(props: { catalogue: CatalogueInfo[]; className?: string; bookId: number }) {
  const [sequence, SetSequence] = useState(true)
  const [catalogue, setCatalogue] = useState(props.catalogue)
  const [page, setPage] = useState(0)
  const [showPaging, setShowPaging] = useState(false)
  const { className = '', bookId } = props
  useEffect(() => {
    setCatalogue(props.catalogue)
  }, [props])
  return (
    <div className={`book-catalogue ${className}`}>
      <div className="book-catalogue__info">
        <span>共{catalogue.length}章</span>
        <span
          onClick={() => {
            setShowPaging(!showPaging)
          }}
        >
          选页
        </span>
        <i
          className="iconfont"
          dangerouslySetInnerHTML={{ __html: sequence ? ICONS.SEQUENCE : ICONS.INVERSE }}
          onClick={sequenceInverse}
        ></i>
      </div>
      <ul
        className={`book-catalogue__paging ${showPaging ? 'book-catalogue__paging--active' : ''}`}
        onClick={(e) => {
          const page = Number((e.target as any)?.getAttribute('data-n'))
          if (isNaN(page)) return
          setPage(page)
          setShowPaging(false)
        }}
      >
        {createPaging(catalogue.length, LIMIT_PAGE_NUM)}
      </ul>
      <div className="book-catalogue__content">
        {catalogue.length === 0 ? <BookFlip /> : createCatalogue(getPageCatalogues(LIMIT_PAGE_NUM), bookId, catalogue)}
      </div>
    </div>
  )
  function sequenceInverse() {
    SetSequence(!sequence)
  }
  function getPageCatalogues(onePageLimit) {
    const result = catalogue.slice(page * onePageLimit, (page + 1) * onePageLimit)
    if (sequence) return result
    return result.reverse()
  }
}
function createPaging(catalogueNum: number, onePageLimit: number) {
  const pages = Math.floor(catalogueNum / onePageLimit)
  const result = range(0, pages).map((page) => (
    <li className="book-catalogue__item" data-n={page} key={page}>
      {page * onePageLimit}-{(page + 1) * onePageLimit}
    </li>
  ))
  if (pages * onePageLimit === catalogueNum) {
    return result
  }
  result.push(
    <li className="book-catalogue__item" data-n={pages} key={pages}>
      {pages * onePageLimit}-{catalogueNum}
    </li>,
  )
  return result
}

function createCatalogue(catalogue: CatalogueInfo[], bookId: number, allCatalogue: CatalogueInfo[]) {
  return catalogue.map((item) => (
    <Link
      to={{
        pathname: `/chapter/${bookId}`,
        state: {
          chapterIdList: allCatalogue,
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

function range(start: number, end: number, step = 1): number[] {
  let rangeArray = []
  if (step > 0) {
    for (let number = start; number < end; number += step) {
      rangeArray.push(number)
    }
  } else {
    for (let number = start; number > end; number += step) {
      rangeArray.push(number)
    }
  }

  return rangeArray
}

export default BookCatalogue
