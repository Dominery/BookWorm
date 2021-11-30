import React, { useEffect, useState } from 'react'
import BookImage from '../bookImage/index'

import './index.scss'
interface Item {
  url: string
  title: string
  desc: string
}

function CoverSwiper() {
  const items: [Item, Item, Item] = [
    {
      url: 'http://pt.yuenov.com:15555/file/group1/book/16731724-44a0-48bf-b58f-80af56e515f8.jpg',
      title: '大明镇海王',
      desc: '弘治十年，这是大明王朝美好的中午。　　此时，小冰河期已经来临，绵长的严寒肆虐大地，也同样在吹打着这个土地兼并日益严重的王朝。　　此时，欧洲的文艺复兴运动犹如一道耀眼的光芒刺破中世纪的黑暗。　　此时，俄罗斯刚刚摆脱蒙古控制不到二十年。　　此时，距离哥伦布初次抵达美洲也才过去七年，而达伽马正在海洋上筚路蓝缕开辟通往印度的新航线。　　喜欢看历史小说的刘晋穿越到了这样的一个时代，从一介',
    },
    {
      url: 'http://pt.yuenov.com:15555/file/group1/book/3d50c50d-6d1c-4b39-b689-fa28c7557a88.jpg',
      title: '大明',
      desc: '弘治十年，这是大明王朝美好的中午。　　此时，小冰河期已经来临，绵长的严寒肆虐大地，也同样在吹打着这个土地兼并日益严重的王朝。　　此时，欧洲的文艺复兴运动犹如一道耀眼的光芒刺破中世纪的黑暗。　　此时，俄罗斯刚刚摆脱蒙古控制不到二十年。　　此时，距离哥伦布初次抵达美洲也才',
    },
    {
      url: 'http://pt.yuenov.com:15555//file/group1/book/b7553c0c-36ed-4615-9fe8-88d1c2b9a6fa.jpg',
      title: '大明',
      desc: '弘治十年，这是大明王朝美好的中午。　　此时，小冰河期已经来临，绵长的严寒肆虐大地，也同样在吹打着这个土地兼并日益严重的王朝。　　此时，欧洲的文艺复兴运动犹如一道耀眼的光芒刺破中世纪的黑暗。　　此时，俄罗斯刚刚摆脱蒙古控制不到二十年。　　此时，距离哥伦布初次抵达美洲也才',
    },
  ]
  let [swipe, setSwipe] = useState([0, 1, 2])
  useEffect(() => {
    let autoCircle = setInterval(() => {
      let [first, ...rest] = swipe
      setSwipe([...rest, first])
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
          backgroundImage: `url(${items[swipe[0]].url})`,
        }}
      >
        <div className="cover-swiper__item" data-index={swipe[0]}>
          <BookImage src={items[0].url} className="cover-swiper__item__img" />
        </div>
        <div className="cover-swiper__item" data-index={swipe[2]}>
          <BookImage src={items[1].url} className="cover-swiper__item__img" />
        </div>
        <div className="cover-swiper__item" data-index={swipe[1]}>
          <BookImage src={items[2].url} className="cover-swiper__item__img" />
        </div>
      </div>
      <div className="cover-swiper__info">
        <h3 className="cover-swiper__info__title">{items[swipe[0]].title}</h3>
        <p className="cover-swiper__info__desc">{items[swipe[0]].desc}</p>
      </div>
    </div>
  )
}

export default CoverSwiper
