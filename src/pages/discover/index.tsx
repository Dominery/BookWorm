import React, { useEffect } from 'react'
import { CoverSwiper, SearchBox, Layout, TabBar, Header, BookFlip } from 'components/index'

import './index.scss'
import { useDiscoverData } from 'service/index'
import typeCards from './typeCardGenerator'
import { randomChoose } from 'utils/random'
import { Navigation } from 'utils/data'

function Discover({ match }) {
  const { data, getData } = useDiscoverData()
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout
      footer={<TabBar active={Navigation.Discover} />}
      header={
        <Header>
          <SearchBox />
        </Header>
      }
    >
      <>
        <CoverSwiper items={randomChoose(chooseSwiperItems(data), 3)} />
        {data.length === 0 ? <BookFlip /> : typeCards(data)}
      </>
    </Layout>
  )
}

function chooseSwiperItems(data: any[]) {
  return data.find((item) => item.type === 'CATEGORY')?.bookList ?? []
}

export default Discover
