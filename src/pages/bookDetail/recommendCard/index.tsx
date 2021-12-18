import React from 'react'
import { TypeCard, bookCards } from 'components/index'

function RecommendCard(props: { books: any[] }) {
  const { books } = props
  return (
    <TypeCard title="同类推荐">
      <>{bookCards(books.slice(0, 6), 'card width--50')}</>
    </TypeCard>
  )
}

export default RecommendCard
