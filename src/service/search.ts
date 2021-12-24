import { useState } from 'react'
import { chooseCategoryBookList, getDiscover } from './discover'

function useSearch(): [(keyword: string) => Promise<any[]>, () => Promise<any[]>] {
  const [pageNum, setPage] = useState(0)
  const getMore = () => {
    return getDiscover()
      .then((data) => chooseCategoryBookList(data))
      .then((data) => {
        setPage(pageNum + 1)
        return data.slice(pageNum * 10, (pageNum + 1) * 10)
      })
  }
  const getData = (keyword: string) => {
    setPage(0)
    return getMore()
  }
  return [getData, getMore]
}

export default useSearch
