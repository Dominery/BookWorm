import { useState } from 'react'
import { IMG_HOST } from 'api/conf'

let bookData = [
  {
    bookList: [
      {
        author: '腹黑的蚂蚁',
        bookId: 33884,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/2568bdd7-10a8-467e-9e6c-03c9ab6e4bf9.jpg',
        desc: ' 不死战神1群321422423微信公众平台：fuheidemayi1叶家弟子叶尘偶有奇遇，获得十二枚上古图腾。每一枚图腾激活之后，都可以开启一项神秘能力，并且习得一本上古武学。从此以后，叶尘将不再是一名碌碌无为的外门弟子，而是一跃崛起，名扬天下，成为妖孽一般的存在。斩上古妖兽、夺无上重宝。入惊险秘境，战绝世强者。一段精彩纷呈的强者之路，尽在不死战神！ ',
        title: '不死战神',
        word: '1364万字',
      },
      {
        author: '风轻扬',
        bookId: 33853,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/071489f6-7e1f-49a1-8ed4-71b3b798c963.jpg',
        desc: ' 地球最强兵王魂穿异世，融轮回武帝记忆，修《九龙战尊诀》，所向披靡，战威无可敌！会炼药、能炼器、懂铭纹……生活职业，全能才是王道！ ',
        title: '凌天战尊',
        word: '1946万字',
      },
      {
        author: '十步行',
        bookId: 33510,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/0486b84c-3693-480e-987b-ec965fc1d1b9.jpg',
        desc: ' 一个妖魔横行的世界，一个属于武道的大汉天朝。在这里，流云铁袖可以吞纳风云，降龙十八掌可以撼山断岳，九字真言可以降妖伏魔，太极拳剑可以扭动乾坤。一个因天朝武库失窃，而被遣送至武当的重犯次子。一口因故蒙尘，自封于解剑石后的玄虚刀。当诸强的后代斩断传承，破碎虚空的大门掀开混沌。这是属于一个骑乘龙的蝼蚁传说，长生不死的武林神话！ ',
        title: '纯阳武神',
        word: '744万字',
      },
      {
        author: '夜雨闻铃0',
        bookId: 39372,
        categoryName: '其他小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/cd0f47d0-018b-4529-bc98-24c168db00b1.jpg',
        desc: ' 你常说，复仇才是我的使命，但你却不知道，守护你，才是我一生的宿命等级制度：斗帝、斗仙、斗神、帝之不朽 ',
        title: '斗破之无上之境',
        word: '724万字',
      },
      {
        author: '孤雨随风',
        bookId: 39977,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/a086c0e8-9f99-46fe-9bec-b42b9cc18ddf.jpg',
        desc: ' 大6传闻：集九本天书者，破天道掌轮回！！上古世界走向了尽头，荒古文明消失在了历史长河，当世界被无尽的炼狱吞噬，灭世的传说在大6拉开序幕。一位来自地球的年轻人出现在了这陌生的世界，当他意识到必须用自己的力量保护所珍惜之人时……青年辰天拿起了手中的利剑刺向了苍穹，用鲜血谱写一段异世狂歌，星辰为阶，日月为路，剑荡九州，踏碎凌霄，上青天，灭皇族，战群雄，异界为帝。 ',
        title: '灵武帝尊',
        word: '2939万字',
      },
      {
        author: '梁七少',
        bookId: 44471,
        categoryName: '都市小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/efa8c806-5d37-40d9-98bb-2ffb2f07f405.jpg',
        desc: ' 撒旦一怒，血流成河！　　他，名号撒旦，以撒旦之名，行杀戮之事！　　回归都市，风云际会，强敌来犯，一路染血试问谁可争锋？　　重返战场，硝烟弥漫，诸敌环伺，铁血杀伐试问谁可一战？　　他，就是龙影兵王，当世撒旦！　　醉卧美人膝，醒掌天下权。　　为兄弟，赴汤蹈火；为美人，无限张狂！　　【七少出品，铁血霸气】七少微信公众号：liangqishao1986请大家关注交流。 ',
        title: '近战狂兵',
        word: '779万字',
      },
      {
        author: '北冥小妖',
        bookId: 40046,
        categoryName: '都市小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/c3d4e71b-6699-44eb-9890-166733662e05.jpg',
        desc: ' 罗军是一名光荣的小保安，也是最牛的小保安，没有之一！繁华都市里，罗军以超强的身手和非凡的智慧如鱼得水。敌人强猛，以拳破之。敌人狡诈，以智慧破之。奈何，离异女业主的美丽成熟，冰山总裁妹妹智慧无双，警花妹妹的英姿飒爽，她们所交织的情网袭杀而来时，罗军的拳与智慧都失去了作用？万丈红尘，我破不开！ ',
        title: '超级保安在都市（罗军丁涵）',
        word: '1485万字',
      },
      {
        author: '七宝琉璃',
        bookId: 40014,
        categoryName: '都市小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/34d50d87-29fd-46c0-bddf-258d90b8a09d.jpg',
        desc: ' 父亲得了重病，巨额医药费让古玩店学徒杨波压力巨大，因为善心偶得琉璃石，让他拥有一双鉴宝金瞳，且看他如何鉴宝捡漏，颠覆命运…… ',
        title: '鉴宝金瞳',
        word: '1132万字',
      },
    ],
    categoryName: '最近更新',
    type: 'RECENT_UPDATE',
  },
  {
    bookList: [
      {
        author: '叶辰萧初然',
        bookId: 55500,
        categoryName: '都市小说',
        chapterStatus: 'END',
        coverImg: '/file/group1/book/53637446-aee0-4d69-b2e7-1dfdaf30c249.jpg',
        desc: ' 叶辰是所有人都瞧不起的上门女婿，但没有人知道他的真实身份却是顶尖家族的大少爷，那些瞧不起他的人，终究要跪在他的面前，诚惶诚恐的叫他一声爷！ ',
        title: '上门龙婿（叶辰萧初然）',
        word: '1365万字',
      },
      {
        author: '不吃鱼的猫儿',
        bookId: 54105,
        categoryName: '都市小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/ddaeba67-75d2-42ae-81cd-bd44d30c4871.jpg',
        desc: ' 三年前，秦浩送外卖的时候，被豪车撞倒了，没想到反被车主逼着跪在车前忏悔，被豪车大灯照了一个晚上，秦浩的双眼就此瞎了。从此，他悲惨的人生开始了；为了替父还债，秦浩成了上门女婿，受尽歧视鄙夷，过着憋屈的生活；三年之后，秦浩睁开双眼，一道神芒闪过。 ',
        title: '极品上门女婿（秦浩林若涵）',
        word: '851万字',
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
        bookId: 31318,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/f5fc281e-9f3f-49b9-931f-05ff62c23da0.jpg',
        desc: ' 伴随着魂导科技的进步，斗罗大陆上的人类征服了海洋，又发现了两片大陆。魂兽也随着人类魂师的猎杀无度走向灭亡，沉睡无数年的魂兽之王在星斗大森林最后的净土苏醒，它要带领仅存的族人，向人类复仇！唐舞麟立志要成为一名强大的魂师，可当武魂觉醒时，苏醒的，却是……旷世之才，龙王之争，我们的龙王传说，将由此开始。 ',
        title: '斗罗大陆3龙王传说',
        word: '353万字',
      },
      {
        author: '卖报小郎君',
        bookId: 56931,
        categoryName: '修真小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/f619e329-5390-487d-94f9-aec455bded20.jpg',
        desc: ' 这个世界，有儒；有道；有佛；有妖；有术士。警校毕业的许七安幽幽醒来，发现自己身处牢狱之中，三日后流放边陲.....他起初的目的只是自保，顺便在这个没有人权的社会里当个富家翁悠闲度日。......多年后，许七安回首前尘，身后是早已逝去的敌人和朋友，以及累累白骨。滚滚长江东逝水，浪花淘尽英雄，是非成败转头空。青山依旧在，几度夕阳红。PS：本书不悲剧！ ',
        title: '大奉打更人',
        word: '2376万字',
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
        author: '厌笔萧生',
        bookId: 32019,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/c574f9a8-a2ce-4f0e-964c-f5d18beef59f.jpg',
        desc: ' 千万年前，李七夜栽下一株翠竹。八百万年前，李七夜养了一条鲤鱼。五百万年前，李七夜收养一个小女孩。今天，李七夜一觉醒来，翠竹修练成神灵，鲤鱼化作金龙，小女孩成为九界女帝。这是一个养成的故事，一个不死的人族小子养成了妖神、养成了仙兽、养成了女帝的故事。请关注作者的公众号“萧府军团”。 ',
        title: '帝霸',
        word: '2148万字',
      },
    ],
    categoryName: '大家都在看',
    type: 'READ_MOST',
  },
  {
    bookList: [
      {
        author: '腹黑的蚂蚁',
        bookId: 33884,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/2568bdd7-10a8-467e-9e6c-03c9ab6e4bf9.jpg',
        desc: ' 不死战神1群321422423微信公众平台：fuheidemayi1叶家弟子叶尘偶有奇遇，获得十二枚上古图腾。每一枚图腾激活之后，都可以开启一项神秘能力，并且习得一本上古武学。从此以后，叶尘将不再是一名碌碌无为的外门弟子，而是一跃崛起，名扬天下，成为妖孽一般的存在。斩上古妖兽、夺无上重宝。入惊险秘境，战绝世强者。一段精彩纷呈的强者之路，尽在不死战神！ ',
        title: '不死战神',
        word: '1364万字',
      },
      {
        author: '风轻扬',
        bookId: 33853,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/071489f6-7e1f-49a1-8ed4-71b3b798c963.jpg',
        desc: ' 地球最强兵王魂穿异世，融轮回武帝记忆，修《九龙战尊诀》，所向披靡，战威无可敌！会炼药、能炼器、懂铭纹……生活职业，全能才是王道！ ',
        title: '凌天战尊',
        word: '1946万字',
      },
      {
        author: '十步行',
        bookId: 33510,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/0486b84c-3693-480e-987b-ec965fc1d1b9.jpg',
        desc: ' 一个妖魔横行的世界，一个属于武道的大汉天朝。在这里，流云铁袖可以吞纳风云，降龙十八掌可以撼山断岳，九字真言可以降妖伏魔，太极拳剑可以扭动乾坤。一个因天朝武库失窃，而被遣送至武当的重犯次子。一口因故蒙尘，自封于解剑石后的玄虚刀。当诸强的后代斩断传承，破碎虚空的大门掀开混沌。这是属于一个骑乘龙的蝼蚁传说，长生不死的武林神话！ ',
        title: '纯阳武神',
        word: '744万字',
      },
      {
        author: '孤雨随风',
        bookId: 39977,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/a086c0e8-9f99-46fe-9bec-b42b9cc18ddf.jpg',
        desc: ' 大6传闻：集九本天书者，破天道掌轮回！！上古世界走向了尽头，荒古文明消失在了历史长河，当世界被无尽的炼狱吞噬，灭世的传说在大6拉开序幕。一位来自地球的年轻人出现在了这陌生的世界，当他意识到必须用自己的力量保护所珍惜之人时……青年辰天拿起了手中的利剑刺向了苍穹，用鲜血谱写一段异世狂歌，星辰为阶，日月为路，剑荡九州，踏碎凌霄，上青天，灭皇族，战群雄，异界为帝。 ',
        title: '灵武帝尊',
        word: '2939万字',
      },
      {
        author: '衣食无忧',
        bookId: 37434,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/42c57299-96c1-4fb8-937a-8e62cd4195c9.jpg',
        desc: ' 白小飞抢红包得抢到了一个时空穿梭器，拥有了穿越无尽时空的能力，然后在成神的道路上越走越远，掀起了无尽的时空风暴…… ',
        title: '成神风暴',
        word: '3953万字',
      },
      {
        author: '寒慕白',
        bookId: 38382,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/13cf7792-5c11-4feb-8113-4745184bbe6a.jpg',
        desc: ' 无限开挂，无限强大！变异的手机，内有神奇的应用下载！形形色色的楼城，可升天，可潜海，可隐身……暗藏着天大的隐秘！唐震建立的楼城能力是……建楼城，玩爆兵，碾压异界抢地盘。唐震端坐山颠，脚下是一望无际的浮空楼城，巨龙守护，天使环绕，无数巨炮冲天而立！而前方百万里的海洋深处，是另一座正等待他征服的大6级楼城！ ',
        title: '我在异界有座城',
        word: '4163万字',
      },
      {
        author: '无敌小贝',
        bookId: 37717,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/570ce2a5-14ed-4c95-a611-af16b0b68f0f.jpg',
        desc: ' 真灵大陆，天骄当世，妖孽争锋，王者长啸可落星辰，皇者翻手可遮苍穹。出身卑微的少年萧叶，得远古传承，从此武极天下，横推万敌，战破九荒，热血澎湃的战斗燃烧九重天。无敌的战场，天才血如海，妖孽骨成山，萧叶步步前行，登临绝巅，一路打到世上无人敢称尊。吾辈武者，当宁折不屈，杀伐决断，快意恩仇，镇杀世间一切敌！（凡是收藏投票打赏进书友群的，表白成功了，学渣变学霸了，屌丝变男神了，走路也能捡到钱了，没错，就是这么神奇！群号：464262649） ',
        title: '武破九荒',
        word: '3615万字',
      },
      {
        author: '黑夜不寂寞',
        bookId: 39390,
        categoryName: '玄幻小说',
        chapterStatus: 'SERIALIZE',
        coverImg: '/file/group1/book/b31cc5ae-c092-4cbd-bef5-ca9287457fb0.jpg',
        desc: ' 帮美女解决麻烦，可帮来帮去，最后她们都成了自己的麻烦。 ',
        title: '女总裁的贴身兵王',
        word: '1385万字',
      },
    ],
    categoryId: 1,
    categoryName: '猜你喜欢',
    type: 'GUESS_FAVORITE',
  },
]

function bookInfoAdapter(bookInfo) {
  // eslint-disable-next-line no-unused-vars
  const { coverImg, ...info } = bookInfo
  info.imgUrl = IMG_HOST + coverImg
  return info
}
function useDiscoverData() {
  const [data, setData] = useState([])
  const getData = () => {
    const newData = bookData.map((item) => {
      const { categoryName, type, bookList } = item
      return {
        categoryName,
        type,
        bookList: bookList.map(bookInfoAdapter),
      }
    })
    setData(newData)
  }
  return {
    data,
    getData,
  }
}

function getDiscover() {
  return bookData
}

export { getDiscover, useDiscoverData }