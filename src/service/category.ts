import { useState } from 'react'
import { imgUrlAdapter } from './adapter'
import { ajaxGet, ajaxGetProxy } from 'utils/request'
import { CATEGORY_SPECIAL_URL, CATEGORY_URL } from 'utils/conf'

function useSpecial(): [any[], () => Promise<void>] {
  const [data, setData] = useState([])
  const getData = () => {
    return ajaxGetProxy(CATEGORY_SPECIAL_URL, {
      params: {
        pageNum: 1,
        pageSize: 5,
        id: 17,
      },
    }).then((getData) => {
      const newData = getData.list?.map(imgUrlAdapter)
      setData(newData)
    })
  }
  return [data, getData]
}

function useCategoryData(): [any[], (categoryId: number) => Promise<void>, (categoryId: number) => Promise<void>] {
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
        pageSize: 6,
        categoryId,
      },
    }).then((getData) => {
      return getData.list?.map(imgUrlAdapter)
    })
  }
}

export { useSpecial, useCategoryData }
