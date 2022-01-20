import React, { useEffect, useState } from 'react'
import { TitleHeader, Layout, BackIcon, BookFlip } from 'components/index'
import { getBookDetail } from 'service/index'
import BookIntroduction from './bookIntroduction/index'
import CollapsibleLines from './collapsibleLines/index'
import UpdateInfo from './updateInfo/index'
import RecommendCard from './recommendCard/index'
import BottomBar from './bottomBar/index'
import { Navigation } from 'utils/data'
import { BookDetail, BookInfo } from 'service/type'

function BookDetail({ match, location }) {
  const { id } = match.params
  const [bookId, setBookId] = useState(id)
  const [detail, setDetail] = useState(null as BookDetail)
  useEffect(() => {
    const data = location?.state?.detail
    if (data) {
      setDetail(data)
      return
    }
    getBookDetail(id).then((data) => {
      setDetail(data)
      setBookId(id)
    })
  }, [match.params])
  // console.log(match.params.id)
  const header = (
    <TitleHeader left={<BackIcon />}>
      <h2>书籍详情</h2>
    </TitleHeader>
  )
  return (
    <Layout header={header} footer={<BottomBar book={detail as unknown as BookInfo} />}>
      {detail && id === bookId ? (
        <>
          <BookIntroduction bookInfo={detail} />
          <CollapsibleLines lines={detail.desc} />
          <UpdateInfo chapterName={detail.chapterName} time={detail.time} bookId={id} />
          <RecommendCard books={detail.recommend} to={Navigation.MoreBook} bookId={bookId} />
        </>
      ) : (
        <BookFlip />
      )}
    </Layout>
  )
}

export default BookDetail
