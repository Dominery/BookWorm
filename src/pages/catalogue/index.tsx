import React, { useEffect, useState } from 'react'
import { Layout, Header, BackIcon, BookCatalogue } from 'components/index'
import { getCatalogue } from 'service/index'

function Catalogue({ match }) {
  const [catalogue, setCatalogue] = useState([])
  const bookId = match.params.id
  useEffect(() => {
    getCatalogue(bookId).then((data) => {
      console.log(data)
      setCatalogue(data)
    })
  }, [])
  const header = (
    <Header left={<BackIcon />}>
      <p>书籍目录</p>
    </Header>
  )
  return (
    <Layout header={header} contentClass="horizon-expand">
      <BookCatalogue catalogue={catalogue} bookId={bookId} />
    </Layout>
  )
}

export default Catalogue
