import { useState } from 'react'
import { BOOK_DETAIL_RECOMMEND_URL, BOOK_DETAIL_URL } from 'utils/conf'
import { ajaxGetProxy } from 'utils/request'
import { imgUrlAdapter, stateAdapter } from './adapter'

function useBookDetail(): [any, (bookId: number) => Promise<void>] {
  const [detail, setDetail] = useState()
  const getDetail = (bookId) => {
    return ajaxGetProxy(BOOK_DETAIL_URL, {
      params: {
        bookId,
      },
    }).then((requestData) => {
      const { recommend, ...newData } = stateAdapter(imgUrlAdapter(requestData))
      setDetail({
        ...newData,
        recommend: recommend.map(imgUrlAdapter),
      })
    })
  }
  return [detail, getDetail]
}
function useRecommendMore(bookId): [any[], () => Promise<void>] {
  const [data, setData] = useState([])
  const [pageNum, setPage] = useState(1)
  const getMore = () => {
    return ajaxGetProxy(BOOK_DETAIL_RECOMMEND_URL, {
      params: {
        pageNum,
        pageSize: 10,
        bookId,
      },
    }).then((getData) => {
      const newData = getData.list?.map(imgUrlAdapter)
      setData([...data, ...newData])
      setPage(pageNum + 1)
    })
  }
  return [data, getMore]
}

export { useBookDetail, useRecommendMore }
