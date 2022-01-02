import { useState } from 'react'
import { BOOK_DETAIL_RECOMMEND_URL, BOOK_DETAIL_URL } from 'utils/conf'
import { ajaxGetProxy } from 'utils/request'
import { imgUrlAdapter, stateAdapter } from './adapter'

function getBookDetail(bookId: number) {
  return ajaxGetProxy(BOOK_DETAIL_URL, {
    params: {
      bookId,
    },
  }).then((requestData) => {
    const { recommend, ...newData } = stateAdapter(imgUrlAdapter(requestData))
    return {
      ...newData,
      recommend: recommend.map(imgUrlAdapter),
    }
  })
}

function getRecommendMore(bookId: number): (pageNum: number) => Promise<any[]> {
  return (pageNum: number) => {
    return ajaxGetProxy(BOOK_DETAIL_RECOMMEND_URL, {
      params: {
        pageNum,
        pageSize: 10,
        bookId,
      },
    }).then((getData) => {
      const newData = getData.list?.map(imgUrlAdapter)
      return newData
    })
  }
}

export { getRecommendMore, getBookDetail }
