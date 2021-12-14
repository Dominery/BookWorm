import React, { useEffect } from 'react'
import BookImage from '../bookImage/index'
import { useSequential } from 'utils/sequentialGenerator'

import './index.scss'
interface Item {
  url: string
  title: string
  desc: string
}

function CoverSwiper() {
  const items = [
    {
      url: 'http://pt.yuenov.com:15555/file/group1/book/16731724-44a0-48bf-b58f-80af56e515f8.jpg',
      title: '大明镇海王',
      desc: '弘治十年，这是大明王朝美好的中午。　　此时，小冰河期已经来临，绵长的严寒肆虐大地，也同样在吹打着这个土地兼并日益严重的王朝。　　此时，欧洲的文艺复兴运动犹如一道耀眼的光芒刺破中世纪的黑暗。　　此时，俄罗斯刚刚摆脱蒙古控制不到二十年。　　此时，距离哥伦布初次抵达美洲也才过去七年，而达伽马正在海洋上筚路蓝缕开辟通往印度的新航线。　　喜欢看历史小说的刘晋穿越到了这样的一个时代，从一介',
    },
    {
      url: 'http://pt.yuenov.com:15555/file/group1/book/3d50c50d-6d1c-4b39-b689-fa28c7557a88.jpg',
      title: '1',
      desc: '弘治十年，这是大明王朝美好的中午。　　此时，小冰河期已经来临，绵长的严寒肆虐大地，也同样在吹打着这个土地兼并日益严重的王朝。　　此时，欧洲的文艺复兴运动犹如一道耀眼的光芒刺破中世纪的黑暗。　　此时，俄罗斯刚刚摆脱蒙古控制不到二十年。　　此时，距离哥伦布初次抵达美洲也才',
    },
    {
      url: 'http://pt.yuenov.com:15555//file/group1/book/b7553c0c-36ed-4615-9fe8-88d1c2b9a6fa.jpg',
      title: '2',
      desc: '弘治十年，这是大明王朝美好的中午。　　此时，小冰河期已经来临，绵长的严寒肆虐大地，也同样在吹打着这个土地兼并日益严重的王朝。　　此时，欧洲的文艺复兴运动犹如一道耀眼的光芒刺破中世纪的黑暗。　　此时，俄罗斯刚刚摆脱蒙古控制不到二十年。　　此时，距离哥伦布初次抵达美洲也才',
    },
    {
      url: 'http://pt.yuenov.com:15555//file/group1/book/186a3e94-6d1e-4cbc-a3f9-a02fe306ddb7.jpg',
      title: '花都大少',
      desc: '关于极品全能学生： 一场车祸让夏天获得了透视功能，从此他踏上了一条与众不同的道路。 打篮球？一个挑五个。 围棋国手？让你三颗子。 鉴宝，我有能看穿一切的透视眼。 极品学姐，温柔学妹，还有冷冷的美女班长，制服小护士，商界女强人，一个都跑不掉。 本书新群：2o3799451，私人微信：> 新浪微博：/5o68596351/ 本书已签约，2',
    },
  ]
  const [range, next] = useSequential(items.length)
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
          backgroundImage: `url(${getCurrentItem(range).url})`,
        }}
      >
        <div className="cover-swiper__item" data-index={range[0]}>
          <BookImage src={items[0].url} className="cover-swiper__item__img" />
        </div>
        <div className="cover-swiper__item" data-index={range[1]}>
          <BookImage src={items[1].url} className="cover-swiper__item__img" />
        </div>
        <div className="cover-swiper__item" data-index={range[2]}>
          <BookImage src={items[2].url} className="cover-swiper__item__img" />
        </div>
        <div className="cover-swiper__item" data-index={range[3]}>
          <BookImage src={items[3].url} className="cover-swiper__item__img" />
        </div>
      </div>
      <div className="cover-swiper__info">
        <h3 className="cover-swiper__info__title">{getCurrentItem(range).title}</h3>
        <p className="cover-swiper__info__desc">{getCurrentItem(range).desc}</p>
      </div>
    </div>
  )
  function getCurrentItem(orders: number[]) {
    const index = orders.findIndex((order) => order === 1)
    return items[index]
  }
}

export default CoverSwiper
