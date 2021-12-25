import React, { useEffect, useRef, useState } from 'react'
import { CoverSwiper, Layout, TabBar, TitleHeader, BookFlip, LinkedSearchBox, NewsTicker } from 'components/index'

import './index.scss'
import { getDiscover, chooseCategoryBookList } from 'service/index'
import typeCards from './typeCardGenerator'
import { randomChoose } from 'utils/random'
import { Navigation } from 'utils/data'
import { useOnRequest } from 'utils/request'
import { fromTop, useTouch } from 'utils/touch'

function Discover({ match }) {
  const [data, setData] = useState([])
  const [onRequest, getData] = useOnRequest(getDiscover)
  const scrollRef = useRef()
  const [touchStart, touchEnd] = useTouch({
    bottom: () => {
      if (!fromTop(10, scrollRef)) {
        return
      }
      console.log('pulldown')
    },
  })
  useEffect(() => {
    getData().then((requestData) => setData(requestData))
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
      contentClass="padding-top0"
      contentRef={scrollRef}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <>
        <NewsTicker
          className="expand"
          tickers={[
            '接口限制访问,数据获取过慢请谅解',
            '接口不提供搜索功能,搜索页面出现的是随机数据',
            '个人页面尚未开发',
          ]}
        />
        <CoverSwiper items={randomChoose(chooseCategoryBookList(data), 3)} />
        {onRequest ? <BookFlip /> : typeCards(data)}
      </>
    </Layout>
  )
}

export default Discover
