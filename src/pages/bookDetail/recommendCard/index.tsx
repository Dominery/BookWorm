import React from 'react'
import { TypeCard, bookCards } from 'components/index'

function RecommendCard(props: { books: any[]; to?: string }) {
  const { books, to } = props
  return (
    <TypeCard title="同类推荐" to={to}>
      <>{bookCards(books.slice(0, 6), 'card width--50')}</>
    </TypeCard>
  )
}

export default RecommendCard
