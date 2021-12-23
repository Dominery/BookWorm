import React, { useEffect, useState } from 'react'
import { categoryInfo } from 'utils/data'
import SideBar from './sideBar/index'

import './index.scss'
import { BookFlip, BookList } from 'components/index'
import { useCategoryData } from 'service/index'
function MainContent(props: { className?: string }) {
  const { className } = props
  const [defaultChannel, defaultCategoryID] = getDefault()
  const [channel, setChannel] = useState(defaultChannel)
  const [categoryId, setCategoryId] = useState(defaultCategoryID)
  const [data, getMore, getData] = useCategoryData()
  useEffect(() => {
    getData(categoryId)
  }, [])

  return (
    <div className={`main-content ${className}`}>
      <SideBar
        categories={getCategories()}
        onClick={(categoryId) => changeCategoryId(categoryId)}
        active={categoryId}
      />
      <div className="main-content__content">
        {data.length === 0 ? (
          <BookFlip />
        ) : (
          <BookList books={data} onPullUp={() => getMore(categoryId)} className="main-content__list" />
        )}
        <ul className="main-content__channel">
          {categoryInfo.map((item) => (
            <li
              key={item.channelId}
              className={`main-content__channel__item ${
                channel === item.channelName ? 'main-content__channel__item--active' : ''
              }`}
              onClick={() => changeChannel(item.channelName)}
            >
              {item.channelName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
  function getCategories() {
    return categoryInfo.find((item) => item.channelName === channel).categories
  }
  function changeChannel(channelName: string) {
    setChannel(channelName)
    const categoryId = categoryInfo.find((item) => item.channelName === channelName).categories[0].categoryId
    setCategoryId(categoryId)
    getData(categoryId)
  }
  function changeCategoryId(categoryId: number) {
    getData(categoryId)
    setCategoryId(categoryId)
  }
}

function getDefault(): [string, number] {
  const channel = categoryInfo[0]
  const categoryId = channel.categories[0].categoryId
  return [channel.channelName, categoryId]
}

export default MainContent
