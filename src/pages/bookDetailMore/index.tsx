import React, { useEffect } from 'react'
import { Layout, Header, BackIcon, BookList } from 'components/index'

import { useRecommendMore } from '../../service/index'

function BookDetailMore({ match }) {
  const [data, getMore] = useRecommendMore(match?.params?.id)
  const header = (
    <Header left={<BackIcon />}>
      <h1>更多</h1>
    </Header>
  )
  useEffect(() => {
    getMore()
  }, [])
  return (
    <Layout header={header} contentClass="more-book__content">
      {data && <BookList books={data} />}
    </Layout>
  )
}

export default BookDetailMore
