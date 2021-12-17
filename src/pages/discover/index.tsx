import React from 'react'
import { CoverSwiper, SearchBox, booksWithoutDesc, verticalBooks } from 'components/index'

import './index.scss'
import { TypeCard } from './component'
import { getDiscover } from '../../controls/discover'

function Discover() {
  return (
    <div className="discover">
      <div className="header">
        <SearchBox />
      </div>
      <div className="content">
        <CoverSwiper />
        <TypeCard title="最近更新">
          <>{booksWithoutDesc(getDiscover().RECENT_UPDATE.bookList, 4, 'width--50')}</>
        </TypeCard>
        <TypeCard title="最近更新">
          <>{verticalBooks(getDiscover().RECENT_UPDATE.bookList, 8, 'width--25')}</>
        </TypeCard>
      </div>
    </div>
  )
}

export default Discover
