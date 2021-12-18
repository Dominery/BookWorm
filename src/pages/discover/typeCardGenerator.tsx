import React from 'react'
import { booksWithoutDesc, verticalBooks, booksWithDesc, TypeCard } from 'components/index'

const RULES = {
  RECENT_UPDATE: {
    func: (title, bookList) => {
      return (
        <TypeCard title={title} key={title}>
          <>{booksWithoutDesc(bookList, 4, 'width--50')}</>
        </TypeCard>
      )
    },
  },
  READ_MOST: {
    func: (title, bookList) => {
      return (
        <TypeCard title={title} key={title}>
          <>{verticalBooks(bookList, 8, 'width--25')}</>
        </TypeCard>
      )
    },
  },
  GUESS_FAVORITE: {
    func: (title, bookList) => {
      return (
        <TypeCard title={title} key={title}>
          <>{booksWithDesc(bookList, bookList.length)}</>
        </TypeCard>
      )
    },
  },
}

function typeCards(discoverData: any[]) {
  return discoverData
    .filter((typeItem) => !!RULES[typeItem.type])
    .map((typeItem) => {
      const { type, categoryName, bookList } = typeItem
      return RULES[type].func(categoryName, bookList)
    })
}

export default typeCards
