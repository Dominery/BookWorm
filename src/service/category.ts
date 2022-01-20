import { useState } from 'react'
import { imgUrlAdapter } from './adapter'
import { ajaxGetProxy } from 'utils/request'
import { CATEGORY_URL } from 'utils/conf'
import { chooseCategoryBookList, getDiscover } from './discover'
import { randomChoose } from 'utils/random'
import { BookInfo } from './type'

function getSpecialBooks() {
  return getDiscover().then((data) => {
    return randomChoose(chooseCategoryBookList(data), 5)
  })
}

function useCategoryData(): [BookInfo[], (categoryId: number) => Promise<void>, (categoryId: number) => Promise<void>] {
  const [data, setData] = useState([])
  const [pageNum, setPage] = useState(1)
  const getMore = (categoryId: number) => {
    return request(categoryId, pageNum).then((getData) => {
      setData([...data, ...getData])
      setPage(pageNum + 1)
    })
  }
  const getData = (categoryId: number) => {
    setPage(1)
    setData([])
    return request(categoryId, 1).then((requestData) => {
      setData(requestData)
      setPage(pageNum + 1)
    })
  }
  return [data, getMore, getData]
  function request(categoryId: number, pageNum: number) {
    return ajaxGetProxy(CATEGORY_URL, {
      params: {
        pageNum,
        pageSize: 10,
        categoryId,
      },
    }).then((getData) => {
      return getData.list?.map(imgUrlAdapter)
    })
  }
}

export { useCategoryData, getSpecialBooks }
