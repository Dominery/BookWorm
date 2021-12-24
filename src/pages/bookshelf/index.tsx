import React from 'react'
import { TitleHeader, Layout, TabBar, verticalBooks, LinkedSearchBox } from 'components/index'

import './index.scss'
import { Navigation } from 'utils/data'
import { getBookShelf } from 'utils/storage'

function BookShelfPage({ match }) {
  const books = getBookShelf()
  return (
    <Layout
      footer={<TabBar active={Navigation.BookShelf} />}
      header={
        <TitleHeader>
          <LinkedSearchBox to={Navigation.Search} />
        </TitleHeader>
      }
    >
      <>{verticalBooks(books, 'bookshelf__book width--25')}</>
    </Layout>
  )
}

export default BookShelfPage
