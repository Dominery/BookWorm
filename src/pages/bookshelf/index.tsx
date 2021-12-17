import React from 'react'
import { Header, Layout, SearchBox, TabBar } from 'components/index'

import './index.scss'

function BookShelfPage({ match }) {
  return (
    <Layout
      footer={<TabBar active={match.url} />}
      header={
        <Header>
          <SearchBox />
        </Header>
      }
    >
      <></>
    </Layout>
  )
}

export default BookShelfPage
