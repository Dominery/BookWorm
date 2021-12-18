import React from 'react'
import { booksWithoutDesc, verticalBooks, booksWithDesc, TypeCard } from 'components/index'

const RULES = {
  RECENT_UPDATE: {
    func: (bookList: any[]) => {
      return booksWithoutDesc(bookList.slice(0, 4), 'width--50')
    },
  },
  READ_MOST: {
    func: (bookList: any[]) => {
      return verticalBooks(bookList.slice(0, 8), 'width--25')
    },
  },
  GUESS_FAVORITE: {
    func: (bookList: any[]) => {
      return booksWithDesc(bookList.slice(0, 6))
    },
  },
}

function typeCards(discoverData: any[]) {
  return discoverData
    .filter((typeItem) => !!RULES[typeItem.type])
    .map((typeItem) => {
      const { type, categoryName, bookList } = typeItem
      return (
        <TypeCard title={categoryName} key={categoryName}>
          <>{RULES[type].func(bookList)}</>
        </TypeCard>
      )
    })
}

export default typeCards
