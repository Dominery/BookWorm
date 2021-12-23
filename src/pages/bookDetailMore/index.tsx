import React, { useEffect, useState } from 'react'
import { Layout, Header, BackIcon, BookList } from 'components/index'

import { useRecommendMore } from '../../service/index'

function BookDetailMore({ match }) {
  const [books, setBooks] = useState([])
  const getMore = useRecommendMore(match?.params?.id)
  const header = (
    <Header left={<BackIcon />}>
      <h1>更多</h1>
    </Header>
  )
  useEffect(() => {
    addBooks()
  }, [])
  return (
    <Layout header={header} contentClass="more-book__content">
      {books && <BookList books={books} onPullUp={addBooks} />}
    </Layout>
  )
  function addBooks() {
    return getMore().then((data) => {
      setBooks([...books, ...data])
    })
  }
}

export default BookDetailMore
