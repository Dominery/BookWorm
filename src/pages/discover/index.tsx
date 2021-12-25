import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  CoverSwiper,
  Layout,
  TabBar,
  TitleHeader,
  BookFlip,
  LinkedSearchBox,
  NewsTicker,
  ToastContext,
} from 'components/index'

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
  const setToast = useContext(ToastContext)
  const [touchStart, touchEnd] = useTouch({
    bottom: () => {
      if (fromTop(scrollRef) > 10) {
        return
      }
      refresh()
    },
  })
  useEffect(() => {
    refresh()
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

  function refresh() {
    getData()
      .then((requestData) => setData(requestData))
      .catch(() => {
        setToast('加载失败，请下拉刷新')
      })
  }
}

export default Discover
