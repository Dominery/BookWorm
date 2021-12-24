import React, { useEffect, useState } from 'react'
import { Layout, TabBar, BookSlider } from 'components/index'
import { getSpecialBooks } from 'service/index'
import MainContent from './mainContent/index'

function CategoryPage({ match }) {
  const [special, setSpecial] = useState([])
  useEffect(() => {
    getSpecialBooks().then((data) => setSpecial(data))
  }, [])
  return (
    <Layout footer={<TabBar active={match.url} />} contentClass="column-flex">
      <>
        <BookSlider books={special} className="expand" />
        <MainContent className="flex-expand horizon-expand" />
      </>
    </Layout>
  )
}

export default CategoryPage
