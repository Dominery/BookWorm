import React, { useEffect } from 'react'
import { CoverSwiper, SearchBox, Layout, TabBar, Header } from 'components/index'

import './index.scss'
import { useDiscoverData } from 'service/index'
import typeCards from './typeCardGenerator'

function Discover({ match }) {
  const { data, getData } = useDiscoverData()
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout
      footer={<TabBar active={match.url} />}
      header={
        <Header>
          <SearchBox />
        </Header>
      }
    >
      <>
        <CoverSwiper />
        {typeCards(data)}
      </>
    </Layout>
  )
}

export default Discover
