import React, { useEffect, useState } from 'react'
import { Layout, TitleHeader, BackIcon, BookCatalogue } from 'components/index'
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
    <TitleHeader left={<BackIcon />}>
      <p>书籍目录</p>
    </TitleHeader>
  )
  return (
    <Layout header={header} contentClass="horizon-expand">
      <BookCatalogue catalogue={catalogue} bookId={bookId} />
    </Layout>
  )
}

export default Catalogue
