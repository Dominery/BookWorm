import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CatalogueInfo } from 'service/type'
import { ICONS } from 'utils/data'
import BookFlip from '../bookFlip/index'

import './index.scss'
const LIMIT_PAGE_NUM = 100

function BookCatalogue(props: { catalogue: CatalogueInfo[]; className?: string; bookId: number; chapterId?: string }) {
  const [sequence, SetSequence] = useState(true)
  const [catalogue, setCatalogue] = useState(props.catalogue)
  const [page, setPage] = useState(0)
  const [showPaging, setShowPaging] = useState(false)
  const { className = '', bookId } = props
  useEffect(() => {
    const { catalogue, chapterId = '' } = props
    setCatalogue(catalogue)
    const chapterIndex = catalogue.findIndex((info) => info.id === chapterId)
    if (chapterIndex === -1) return
    setPage(Math.floor(chapterIndex / LIMIT_PAGE_NUM))
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
        {createPaging(catalogue.length, LIMIT_PAGE_NUM, page)}
      </ul>
      <div className="book-catalogue__content">
        {catalogue.length === 0 ? (
          <BookFlip />
        ) : (
          createCatalogue({
            catalogue: getPageCatalogues(LIMIT_PAGE_NUM),
            bookId,
            allCatalogue: catalogue,
            chapterId: props.chapterId,
          })
        )}
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
function createPaging(catalogueNum: number, onePageLimit: number, currentPage?: number) {
  const pages = Math.floor(catalogueNum / onePageLimit)
  const result = range(0, pages).map((page) => (
    <li
      className={`book-catalogue__item ${currentPage === page ? 'book-catalogue__item--active' : ''}`}
      data-n={page}
      key={page}
    >
      {page * onePageLimit}-{(page + 1) * onePageLimit}
    </li>
  ))
  if (pages * onePageLimit === catalogueNum) {
    return result
  }
  result.push(
    <li
      className={`book-catalogue__item ${currentPage === pages ? 'book-catalogue__item--active' : ''}`}
      data-n={pages}
      key={pages}
    >
      {pages * onePageLimit}-{catalogueNum}
    </li>,
  )
  return result
}

function createCatalogue(props: {
  catalogue: CatalogueInfo[]
  bookId: number
  allCatalogue: CatalogueInfo[]
  chapterId?: string
}) {
  const { catalogue, bookId, allCatalogue, chapterId = '' } = props
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
      className={`book-catalogue__item ${chapterId === item.id ? 'book-catalogue__item--active' : ''}`}
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
export { CatalogueInfo }
