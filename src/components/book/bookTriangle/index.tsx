import React, { useEffect, useState } from 'react'
import BookImage from '../bookImage/index'
import { useSequential } from 'utils/sequentialGenerator'

import './index.scss'
import { Link } from 'react-router-dom'
interface CoverItem {
  imgUrl: string
  title: string
  desc: string
  bookId: number
}

function BookTriangle(props: { items: CoverItem[] }) {
  const [items, setItems] = useState(props.items)
  const [range, next] = useSequential(3)
  useEffect(() => {
    let autoCircle = setInterval(() => {
      next()
    }, 3000)
    return () => {
      clearInterval(autoCircle)
    }
  }, [])
  useEffect(() => {
    if (items.length === 0) {
      setItems(props.items)
    }
  }, [props])
  return (
    <div className="cover-swiper">
      <div
        className="cover-swiper__banner"
        style={{
          backgroundImage: `url(${getCurrentItem(range)?.imgUrl})`,
        }}
      >
        {createSwiperItem(items, range)}
      </div>
      <div className="cover-swiper__info">
        <h3 className="cover-swiper__info__title">{getCurrentItem(range).title}</h3>
        <Link to={getJumpAddr(range)} className="cover-swiper__info__desc">
          {getCurrentItem(range).desc}
        </Link>
      </div>
    </div>
  )
  function getJumpAddr(orders: number[]) {
    let bookId = getCurrentItem(orders).bookId
    if (!bookId) {
      return '#'
    }
    return `/book/${bookId}`
  }
  function getCurrentItem(orders: number[]) {
    const index = orders.findIndex((order) => order === 1)
    return (
      items[index] ?? {
        imgUrl: '',
        title: '加载中',
        desc: '',
        bookId: 0,
      }
    )
  }
}

function createSwiperItem(items: CoverItem[], range: number[]) {
  return items.map((item, index) => (
    <div className="cover-swiper__item" data-index={range[index]} key={item.imgUrl}>
      <BookImage src={item.imgUrl} className="cover-swiper__item__img" />
    </div>
  ))
}

export default BookTriangle
