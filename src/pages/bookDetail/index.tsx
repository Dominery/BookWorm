import React, { useEffect, useState } from 'react'
import { Header, Layout, BackIcon, BookFlip } from 'components/index'
import { useBookDetail } from 'service/index'
import BookIntroduction from './bookIntroduction/index'
import CollapsibleLines from './collapsibleLines/index'
import UpdateInfo from './updateInfo/index'
import RecommendCard from './recommendCard/index'
import BottomBar from './bottomBar/index'

function BookDetail({ match }) {
  const { id } = match.params
  const [bookId, setBookId] = useState(id)
  const [data, getData] = useBookDetail()
  useEffect(() => {
    getData(id).then(() => {
      setBookId(id)
    })
  }, [match.params])
  // console.log(match.params.id)
  const header = (
    <Header left={<BackIcon />}>
      <h2>书籍详情</h2>
    </Header>
  )
  return (
    <Layout header={header} footer={<BottomBar />}>
      {data && id === bookId ? (
        <>
          <BookIntroduction bookInfo={data} />
          <CollapsibleLines lines={data.desc} />
          <UpdateInfo chapterName={data.chapterName} time={data.time} bookId={id} />
          <RecommendCard books={data.recommend} to={`/book/more/${id}`} />
        </>
      ) : (
        <BookFlip />
      )}
    </Layout>
  )
}

export default BookDetail
