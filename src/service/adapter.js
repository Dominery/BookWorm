import { IMG_HOST } from 'api/conf'
function imgUrlAdapter(bookInfo) {
  // eslint-disable-next-line no-unused-vars
  const { coverImg, ...info } = bookInfo
  info.imgUrl = IMG_HOST + coverImg
  return info
}
const StateMap = {
  END: '已完结',
  SERIALIZE: '连载中',
}
function stateAdapter(bookInfo) {
  const {
    update: { chapterName, chapterStatus, time },
    ...info
  } = bookInfo
  info.state = StateMap[chapterStatus]
  return {
    ...info,
    chapterName,
    time,
  }
}

export { imgUrlAdapter, stateAdapter }
