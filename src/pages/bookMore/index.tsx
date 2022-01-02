import React, { useEffect, useState } from 'react'
import { Layout, TitleHeader, BackIcon, BookList } from 'components/index'
import { getMoreBook } from 'service/discover'
import { Navigation } from 'utils/data'
import { getRecommendMore } from 'service/bookDetail'

const GET_MORE_FUNC = {
  [Navigation.Discover]: getMoreBook,
  [Navigation.BOOK]: getRecommendMore,
}

function BookMore({ location }) {
  const [books, setBooks] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const { from, params } = location.state
  const getMore = GET_MORE_FUNC[from]?.(params)
  const header = (
    <TitleHeader left={<BackIcon />}>
      <h1>更多</h1>
    </TitleHeader>
  )
  useEffect(() => {
    addBooks()
  }, [])
  return (
    <Layout header={header} contentClass="more-book__content">
      <BookList books={books} onPullUp={addBooks} />
    </Layout>
  )
  function addBooks() {
    return getMore?.(pageNum).then((data) => {
      setBooks([...books, ...data])
      setPageNum(pageNum + 1)
    })
  }
}

export default BookMore
