import React from 'react'
import { booksWithoutDesc, verticalBooks, booksWithDesc, TypeCard } from 'components/index'
import { Navigation } from 'utils/data'
import { BookInfo, BookTypes } from 'service/type'

const RULES = {
  RECENT_UPDATE: {
    func: (bookList: BookInfo[]) => {
      return booksWithoutDesc(bookList.slice(0, 4), 'width--50')
    },
  },
  READ_MOST: {
    func: (bookList: BookInfo[]) => {
      return verticalBooks(bookList.slice(0, 8), 'width--25')
    },
  },
  CATEGORY: {
    func: (bookList: BookInfo[]) => {
      return booksWithDesc(bookList.slice(0, 6))
    },
  },
}

function typeCards(discoverData: BookTypes[]) {
  return discoverData
    .filter((typeItem) => !!RULES[typeItem.type])
    .map((typeItem) => {
      const { type, categoryName, bookList } = typeItem
      return (
        <TypeCard
          title={categoryName}
          key={categoryName}
          pathname={Navigation.MoreBook}
          state={{ params: typeItem.type, from: Navigation.Discover }}
        >
          <>{RULES[type].func(bookList)}</>
        </TypeCard>
      )
    })
}

export default typeCards
