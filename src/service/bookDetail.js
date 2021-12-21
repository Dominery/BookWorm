import { useState } from 'react'
import { imgUrlAdapter, stateAdapter } from './adapter'
const info = {
  author: '腹黑的蚂蚁',
  bookId: 33884,
  categoryName: '玄幻小说',
  chapterNum: 4726,
  coverImg: '/file/group1/book/2568bdd7-10a8-467e-9e6c-03c9ab6e4bf9.jpg',
  desc: ' 不死战神1群321422423微信公众平台：fuheidemayi1叶家弟子叶尘偶有奇遇，获得十二枚上古图腾。每一枚图腾激活之后，都可以开启一项神秘能力，并且习得一本上古武学。从此以后，叶尘将不再是一名碌碌无为的外门弟子，而是一跃崛起，名扬天下，成为妖孽一般的存在。斩上古妖兽、夺无上重宝。入惊险秘境，战绝世强者。一段精彩纷呈的强者之路，尽在不死战神！ ',
  recommend: [
    {
      author: '辰东',
      bookId: 74585,
      categoryName: '玄幻小说',
      chapterStatus: 'SERIALIZE',
      coverImg: '/file/group1/book/23515770-5434-446c-9323-6924df55c018.jpg',
      desc: ' 在破败中崛起，在寂灭中复苏。 沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角…… ',
      title: '圣墟',
      word: '1674万字',
    },
    {
      author: '唐家三少',
      bookId: 35707,
      categoryName: '玄幻小说',
      chapterStatus: 'END',
      coverImg: '/file/group1/book/d61fdbfe-58b3-4c52-9129-27c7bc5f9c0c.jpg',
      desc: ' 唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大6。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大6上最为强大也是最荣耀的职业——魂师!当唐门暗器来到斗罗大6，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？他能否成为这个世界的主宰：神? ',
      title: '斗罗大陆',
      word: '322万字',
    },
    {
      author: '唐家三少',
      bookId: 48772,
      categoryName: '玄幻小说',
      chapterStatus: 'SERIALIZE',
      coverImg: '/file/group1/book/2fcef4e6-8a20-4ec7-bddf-b0a55c0bacb7.jpg',
      desc: ' 一万年后，冰化了。　　斗罗联邦科考队在极北之地科考时发现了一个有着金银双色花纹的蛋，用仪器探察之后，发现里面居然有生命体征，赶忙将其带回研究所进行孵化。蛋孵化出来了，可孵出来的却是一个婴儿，和人类一模一样的婴儿，一个蛋生的孩子。 ',
      title: '斗罗大陆4终极斗罗（斗罗大陆IV终极斗罗）',
      word: '1079万字',
    },
    {
      author: '天蚕土豆',
      bookId: 34798,
      categoryName: '玄幻小说',
      chapterStatus: 'SERIALIZE',
      coverImg: '/file/group1/book/aaed46d4-1499-4628-94a4-af9189002293.jpg',
      desc: ' 天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生？这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气，可吞天地日月… ',
      title: '元尊',
      word: '623万字',
    },
    {
      author: '青鸾峰上',
      bookId: 47813,
      categoryName: '玄幻小说',
      chapterStatus: 'SERIALIZE',
      coverImg: '/file/group1/book/3e505d41-edf2-4c7f-b71b-3d1d00e52fd3.jpg',
      desc: ' 生死看淡，不服就干。 ',
      title: '一剑独尊',
      word: '1267万字',
    },
    {
      author: '净无痕',
      bookId: 43422,
      categoryName: '玄幻小说',
      chapterStatus: 'SERIALIZE',
      coverImg: '/file/group1/book/0f07a0b0-0b38-4d5d-990e-b4e9ac0b7cf6.jpg',
      desc: ' 东方神州，有人皇立道统，有圣贤宗门传道，有诸侯雄踞一方王国，诸强林立，神州动乱千万载，执此之时，一代天骄叶青帝及东凰大帝横空出世，斩人皇，驭圣贤，诸侯臣服，东方神州一统！然，叶青帝忽然暴毙，世间雕像尽皆被毁，于世间除名，沦为禁忌；从此神州唯东凰大帝独尊！十五年后，东海青州城，一名为叶伏天的少年，开启了他的传奇之路… ',
      title: '伏天氏',
      word: '1243万字',
    },
  ],
  title: '不死战神',
  update: {
    chapterName: '第四千七百二十九章 都灵山',
    chapterStatus: 'SERIALIZE',
    time: 1639704400000,
  },
  word: '1365万字',
}

const more = [
  {
    author: '辰东',
    bookId: 74585,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/23515770-5434-446c-9323-6924df55c018.jpg',
    desc: ' 在破败中崛起，在寂灭中复苏。 沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角…… ',
    title: '圣墟',
    word: '1674万字',
  },
  {
    author: '唐家三少',
    bookId: 35707,
    categoryName: '玄幻小说',
    chapterStatus: 'END',
    coverImg: '/file/group1/book/d61fdbfe-58b3-4c52-9129-27c7bc5f9c0c.jpg',
    desc: ' 唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大6。这里没有魔法，没有斗气，没有武术，却有神奇的武魂。这里的每个人，在自己六岁的时候，都会在武魂殿中令武魂觉醒。武魂有动物，有植物，有器物，武魂可以辅助人们的日常生活。而其中一些特别出色的武魂却可以用来修炼并进行战斗，这个职业，是斗罗大6上最为强大也是最荣耀的职业——魂师!当唐门暗器来到斗罗大6，当唐三武魂觉醒，他能否在这片武魂的世界再铸唐门的辉煌？他能否成为这个世界的主宰：神? ',
    title: '斗罗大陆',
    word: '322万字',
  },
  {
    author: '唐家三少',
    bookId: 48772,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/2fcef4e6-8a20-4ec7-bddf-b0a55c0bacb7.jpg',
    desc: ' 一万年后，冰化了。　　斗罗联邦科考队在极北之地科考时发现了一个有着金银双色花纹的蛋，用仪器探察之后，发现里面居然有生命体征，赶忙将其带回研究所进行孵化。蛋孵化出来了，可孵出来的却是一个婴儿，和人类一模一样的婴儿，一个蛋生的孩子。 ',
    title: '斗罗大陆4终极斗罗（斗罗大陆IV终极斗罗）',
    word: '1079万字',
  },
  {
    author: '天蚕土豆',
    bookId: 34798,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/aaed46d4-1499-4628-94a4-af9189002293.jpg',
    desc: ' 天地为炉，万物为铜，阴阳为炭，造化为工。气运之争，蟒雀吞龙。究竟是蟒雀为尊，还是圣龙崛起，凌驾众生？这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气，可吞天地日月… ',
    title: '元尊',
    word: '623万字',
  },
  {
    author: '青鸾峰上',
    bookId: 47813,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/3e505d41-edf2-4c7f-b71b-3d1d00e52fd3.jpg',
    desc: ' 生死看淡，不服就干。 ',
    title: '一剑独尊',
    word: '1270万字',
  },
  {
    author: '净无痕',
    bookId: 43422,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/0f07a0b0-0b38-4d5d-990e-b4e9ac0b7cf6.jpg',
    desc: ' 东方神州，有人皇立道统，有圣贤宗门传道，有诸侯雄踞一方王国，诸强林立，神州动乱千万载，执此之时，一代天骄叶青帝及东凰大帝横空出世，斩人皇，驭圣贤，诸侯臣服，东方神州一统！然，叶青帝忽然暴毙，世间雕像尽皆被毁，于世间除名，沦为禁忌；从此神州唯东凰大帝独尊！十五年后，东海青州城，一名为叶伏天的少年，开启了他的传奇之路… ',
    title: '伏天氏',
    word: '1246万字',
  },
  {
    author: '爱潜水的乌贼',
    bookId: 44228,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/b9205a00-7a96-46e4-9f1a-14858091a2d2.jpg',
    desc: ' 蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个世界：　　枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊人，封印物……光明依旧照耀，神秘从未远离，这是一段“愚者”的传说。 ',
    title: '诡秘之主',
    word: '552万字',
  },
  {
    author: '厌笔萧生',
    bookId: 32019,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/c574f9a8-a2ce-4f0e-964c-f5d18beef59f.jpg',
    desc: ' 千万年前，李七夜栽下一株翠竹。八百万年前，李七夜养了一条鲤鱼。五百万年前，李七夜收养一个小女孩。今天，李七夜一觉醒来，翠竹修练成神灵，鲤鱼化作金龙，小女孩成为九界女帝。这是一个养成的故事，一个不死的人族小子养成了妖神、养成了仙兽、养成了女帝的故事。请关注作者的公众号“萧府军团”。 ',
    title: '帝霸',
    word: '2150万字',
  },
  {
    author: '飞天鱼',
    bookId: 33319,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/e153bffc-b00c-4380-b461-9e6f9d3d619e.jpg',
    desc: ' 八百年前，明帝之子张若尘，被他的未婚妻池瑶公主杀死，一代天骄，就此陨落。八百年后，张若尘重新活了过来，却现曾经杀死他的未婚妻，已经统一昆仑界，开辟出第一中央帝国，号称“池瑶女皇”。池瑶女皇——统御天下，威临八方；青春永驻，不死不灭。张若尘站在诸皇祠堂外，望着池瑶女皇的神像，心中燃烧起熊熊的仇恨烈焰，“待我重修十三年，敢叫女皇下黄泉”。 ',
    title: '万古神帝',
    word: '1890万字',
  },
  {
    author: '烽火戏诸侯',
    bookId: 41255,
    categoryName: '玄幻小说',
    chapterStatus: 'SERIALIZE',
    coverImg: '/file/group1/book/41a98b0b-5cd4-45d2-93c9-5f4ad5d9bace.jpg',
    desc: ' 大千世界，无奇不有。我陈平安，唯有一剑，可搬山，倒海，降妖，镇魔，敕神，摘星，断江，摧城，开天！ ',
    title: '剑来',
    word: '6427万字',
  },
]

function useBookDetail(bookId) {
  const [data, setData] = useState()
  const getData = () => {
    const { recommend, ...newData } = stateAdapter(imgUrlAdapter(info))
    setData({
      ...newData,
      recommend: recommend.map(imgUrlAdapter),
    })
  }
  return {
    data,
    getData,
  }
}
function useRecommendMore(bookId) {
  const [data, setData] = useState([])
  const getMore = () => {
    return new Promise((resolve, reject) => {
      const newData = more.map(imgUrlAdapter)
      resolve([...data, ...newData])
    }).then((data) => {
      setData(data)
    })
  }
  return [data, getMore]
}

export { useBookDetail, useRecommendMore }
