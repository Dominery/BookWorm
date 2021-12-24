import React from 'react'
import { Header, Layout, SearchBox, TabBar, verticalBooks } from 'components/index'

import './index.scss'
import { Navigation } from 'utils/data'
import { getBookShelf } from 'utils/storage'

function BookShelfPage({ match }) {
  const books = getBookShelf()
  return (
    <Layout
      footer={<TabBar active={Navigation.BookShelf} />}
      header={
        <Header>
          <SearchBox />
        </Header>
      }
    >
      <>{verticalBooks(books, 'bookshelf__book width--25')}</>
    </Layout>
  )
}

export default BookShelfPage
