import React, { useEffect, useState } from 'react'
import { CoverSwiper, Layout, TabBar, TitleHeader, BookFlip, LinkedSearchBox } from 'components/index'

import './index.scss'
import { getDiscover, chooseCategoryBookList } from 'service/index'
import typeCards from './typeCardGenerator'
import { randomChoose } from 'utils/random'
import { Navigation } from 'utils/data'

function Discover({ match }) {
  const [data, setData] = useState([])
  useEffect(() => {
    getDiscover().then((requestData) => setData(requestData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout
      footer={<TabBar active={Navigation.Discover} />}
      header={
        <TitleHeader>
          <LinkedSearchBox to={Navigation.Search} />
        </TitleHeader>
      }
    >
      <>
        <CoverSwiper items={randomChoose(chooseCategoryBookList(data), 3)} />
        {data.length === 0 ? <BookFlip /> : typeCards(data)}
      </>
    </Layout>
  )
}

export default Discover
