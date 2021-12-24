import React, { useEffect } from 'react'
import { Layout, TitleHeader, BackIcon, BookList, BookFlip } from 'components/index'

import { useMoreBook } from 'service/index'

function DiscoverMoreBook({ match }) {
  const [data, getMore] = useMoreBook(match.params.type)
  const header = (
    <TitleHeader left={<BackIcon />}>
      <h1>更多</h1>
    </TitleHeader>
  )
  useEffect(() => {
    getMore()
  }, [])
  return (
    <Layout header={header} contentClass="more-book__content">
      {data.length === 0 ? <BookFlip /> : <BookList books={data} onPullUp={getMore} />}
    </Layout>
  )
}

export default DiscoverMoreBook
