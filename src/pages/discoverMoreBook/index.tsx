import React, { useEffect } from 'react'
import { Layout, Header, BackIcon, BookList } from 'components/index'

import './index.scss'
import { useMoreBook } from '../../service/index'

function DiscoverMoreBook({ match }) {
  const [data, getMore] = useMoreBook(match)
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

export default DiscoverMoreBook
