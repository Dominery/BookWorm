import React, { useEffect } from 'react'
import { Layout, TabBar, BookSlider } from 'components/index'
import { useSpecial } from 'service/index'
import MainContent from './mainContent/index'

function CategoryPage({ match }) {
  const [special, getSpecial] = useSpecial()
  useEffect(() => {
    getSpecial()
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
