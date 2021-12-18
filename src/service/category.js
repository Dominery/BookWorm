import { useState } from 'react'
import { imgUrlAdapter } from './adapter'

const bookData = [
  {
    author: '浮沉',
    bookId: 30785,
    categoryName: '都市小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/74e31230-4c1b-4f66-aa14-0f7b517a83f6.jpg',
    desc: ' 唐生，官宦子弟，重生回到17岁那年拾缺补憾，重塑家族辉煌！如何当一个低调的官二代？最重要的是让父亲这个官一代仕途稳健，青云直上。那一世因缘际会所错过的少女，这一世要呵护她一生；那一世嫌弃自己没前途和钱途的女人，这一世要让她悔恨交集！“儿子，你爸是书记，你要低调啊！”“老妈，我已经很低调了。”“砸了人家的大奔，这是低调？”“这个……是失手了！”【级5oo大群：1o74487o3（本群是VIp书友群，谢绝非订阅书友）】 ',
    title: '极品太子爷',
    word: '581万字',
  },
  {
    author: '小小羽',
    bookId: 30876,
    categoryName: '都市小说',
    chapterStatus: 'END',
    coverImg: '/file/group1/book/c1a04449-1c7f-42d5-b511-085b2af8b10c.jpg',
    desc: ' 他是名医，也是神医。就算是死神盯着的人，有他在，死神也要乖乖绕道而行。只要你相信他，你的任何疾病都不在是问题。这就是张阳，一个被称为上帝使者的人，一个有点张扬，但很可爱的人！…………小羽新书，恳求新老朋友们继续支持，这是小羽第五本书，已有四本老书完本，请朋友们放心收藏！新建书友新群，喜欢本书，支持本书的朋友可以共同进来探讨，群号：1462o3975 ',
    title: '神医圣手',
    word: '403万字',
  },
  {
    author: '大烟缸',
    bookId: 30973,
    categoryName: '网游小说',
    chapterStatus: 'END',
    coverImg: '/file/group1/book/b9e982e5-cf2a-47fc-ab87-5becd4730e60.jpg',
    desc: ' 大力是一个能力平庸知识有限的底层代练员，穿越到五年前的游戏初期也只想混的比前世好一些，死搬攻略的他频频失误，阴差阳错之下奇遇连连笑料百出。本书穿越者争霸，女尊争霸，高富帅争霸，纨绔争霸，职业高玩争霸，中二争霸，吊丝争霸，NPC争霸。而冠满神之手救世主龙骑士大领主亲王各头衔于一身的大力则表示：低调发展永不称霸！大力是一个废材，但再牛逼的人都在为他打工。大力欠一身巨债，但全世界都在为他买单。这是一个没有特长，善良而市侩的小人物艰辛的“被”奋斗史。这是一个真猪吃真虎的“被”代练传说。本书的又轻又快又爽又欢乐！不装逼不霸气不脑残不后宫不花痴不倒贴不YY。希望本书能给书友们带来别样的感受。 ',
    title: '网游之代练传说',
    word: '385万字',
  },
  {
    author: '十步行',
    bookId: 31078,
    categoryName: '玄幻小说',
    chapterStatus: 'END',
    coverImg: '/file/group1/book/a460eab6-ced7-4597-b3ac-134a684c7347.jpg',
    desc: ' 这是一个不为人知的远古年代，比炎黄更遥远的祖先，大地苍茫，血气满天。这是一段属于人族的悲惨岁月，比厉鬼更凶残的百族，烈火焚城，战血纷纷。这是一团沉睡亿载的强者之魂，比阳光更炽烈的热血，战尽八荒，血染九天。……在这里，人族只相信自己，不求仙，不拜神，不礼佛，因为他们都是敌人！（人皇书友群：246558156，欢迎加入。） ',
    title: '人皇',
    word: '242万字',
  },
  {
    author: '一目尽天涯',
    bookId: 31141,
    categoryName: '修真小说',
    chapterStatus: 'END',
    coverImg: '/file/group1/book/9a709974-a533-455b-b621-fbad18e1967a.jpg',
    desc: ' 人世间有无尽大地，三十三天。三十三天外，为仙界。人仙本不相连。一个意外，沈安重生为山，自此，天地之间多出一座通天神峰。谓之：不周！…书友群：134692483【需粉丝值验证】 ',
    title: '重生为山',
    word: '46万字',
  },
]

function useSpecial() {
  const [data, setData] = useState([])
  const getData = () => {
    const newData = bookData.map(imgUrlAdapter)
    setData(newData)
  }
  return [data, getData]
}

function useCategoryData(categoryId) {
  const [data, setData] = useState([])
  const [category, setCategory] = useState(categoryId)
  const getMore = () => {
    const newData = bookData.map(imgUrlAdapter)
    setData([...data, ...newData])
  }
  const getData = (categoryId) => {
    setCategory(categoryId)
    const newData = bookData.map(imgUrlAdapter)
    setData(newData)
  }
  return [data, getData, getMore]
}

export { useSpecial, useCategoryData }
