import { useState } from 'react'
import { imgUrlAdapter } from './adapter'
import { ajaxGetProxy } from 'utils/request'
import { DISCOVER_MORE_URL, DISCOVER_URL } from 'utils/conf'
import { randomPick, shuffle } from 'utils/random'
import { categoryInfo } from 'utils/data'

function useDiscoverData() {
  const [data, setData] = useState([])
  const getData = () => {
    ajaxGetProxy(DISCOVER_URL)
      .then((data) => {
        const categories =
          data.list
            ?.filter((item) => item.type === 'CATEGORY')
            .reduce((pre: [], cur) => {
              return pre.concat(cur.bookList ?? [])
            }, []) ?? []
        const result: any[] = data.list?.filter((item) => item.type !== 'CATEGORY') ?? []
        result.push({
          categoryName: '猜你喜欢',
          bookList: shuffle<any>(categories),
          type: 'CATEGORY',
        })
        return result
      })
      .then((data) => {
        console.log(data)
        return data.map((item) => {
          const { bookList, ...other } = item
          return {
            ...other,
            bookList: bookList.map(imgUrlAdapter),
          }
        })
      })
      .then((data) => {
        setData(data)
      })
  }
  return {
    data,
    getData,
  }
}
function getDiscover() {
  return ajaxGetProxy(DISCOVER_URL)
    .then((data) => {
      const categories =
        data.list
          ?.filter((item) => item.type === 'CATEGORY')
          .reduce((pre: [], cur) => {
            return pre.concat(cur.bookList ?? [])
          }, []) ?? []
      const result: any[] = data.list?.filter((item) => item.type !== 'CATEGORY') ?? []
      result.push({
        categoryName: '猜你喜欢',
        bookList: shuffle<any>(categories),
        type: 'CATEGORY',
      })
      return result
    })
    .then((data) => {
      return data.map((item) => {
        const { bookList, ...other } = item
        return {
          ...other,
          bookList: bookList.map(imgUrlAdapter),
        }
      })
    })
}

function chooseCategoryBookList(discoverData: any[]): any[] {
  return discoverData.find((item) => item.type === 'CATEGORY')?.bookList ?? []
}
const categoryIds = categoryInfo.flatMap((item) => item.categories).map((item) => item.categoryId)

function getMoreBook(type: string): (pageNum: number) => Promise<any[]> {
  return (pageNum: number) => {
    return ajaxGetProxy(DISCOVER_MORE_URL, {
      params: {
        pageNum,
        pageSize: 10,
        type,
        categoryId: randomPick<number>(categoryIds),
      },
      timeout: 2000,
    }).then((getData) => {
      const newData = getData.list?.map(imgUrlAdapter)
      return newData
    })
  }
}

export { getMoreBook, getDiscover, chooseCategoryBookList }
