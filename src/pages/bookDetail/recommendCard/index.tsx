import React from 'react'
import { TypeCard, bookCards } from 'components/index'
import { Navigation } from 'utils/data'

function RecommendCard(props: { books: any[]; to: string; bookId: number }) {
  const { books, to, bookId } = props
  return (
    <TypeCard title="同类推荐" pathname={to} state={{ params: bookId, from: Navigation.BOOK }}>
      <>{bookCards(books.slice(0, 6), 'card width--50')}</>
    </TypeCard>
  )
}

export default RecommendCard
