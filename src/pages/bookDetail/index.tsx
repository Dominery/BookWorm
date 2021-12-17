import React from 'react'
import { Header, Layout, BackIcon } from 'components/index'

function BookDetail({ match }) {
  console.log(match.params.id)
  const header = (
    <Header left={<BackIcon />}>
      <h2>书籍详情</h2>
    </Header>
  )
  return (
    <Layout header={header}>
      <></>
    </Layout>
  )
}

export default BookDetail
