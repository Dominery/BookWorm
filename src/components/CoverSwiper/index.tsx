import React, { useEffect } from 'react'
import BookImage from '../book/bookImage/index'
import { useSequential } from 'utils/sequentialGenerator'

import './index.scss'
interface CoverItem {
  imgUrl: string
  title: string
  desc: string
}

function CoverSwiper(props: { items: CoverItem[] }) {
  const { items } = props
  const [range, next] = useSequential(3)
  useEffect(() => {
    let autoCircle = setInterval(() => {
      next()
    }, 3000)
    return () => {
      clearInterval(autoCircle)
    }
  })
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
        <p className="cover-swiper__info__desc">{getCurrentItem(range).desc}</p>
      </div>
    </div>
  )
  function getCurrentItem(orders: number[]) {
    const index = orders.findIndex((order) => order === 1)
    return (
      items[index] ?? {
        imgUrl: '',
        title: '加载中',
        desc: '加载中',
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

export default CoverSwiper
