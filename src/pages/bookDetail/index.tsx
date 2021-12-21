import React, { useEffect } from 'react'
import { Header, Layout, BackIcon, BookFlip } from 'components/index'
import { useBookDetail } from 'service/index'
import BookIntroduction from './bookIntroduction/index'
import CollapsibleLines from './collapsibleLines/index'
import UpdateInfo from './updateInfo/index'
import RecommendCard from './recommendCard/index'
import BottomBar from './bootomBar/index'

function BookDetail({ match }) {
  const { data, getData } = useBookDetail()
  useEffect(() => {
    getData()
  }, [])
  // console.log(match.params.id)
  const header = (
    <Header left={<BackIcon />}>
      <h2>书籍详情</h2>
    </Header>
  )
  return (
    <Layout header={header} footer={<BottomBar />}>
      {data ? (
        <>
          <BookIntroduction bookInfo={data} />
          <CollapsibleLines lines={data.desc} />
          <UpdateInfo chapterName={data.chapterName} time={data.time} />
          <RecommendCard books={data.recommend} to="/book/more/2" />
        </>
      ) : (
        <BookFlip />
      )}
    </Layout>
  )
}

export default BookDetail
