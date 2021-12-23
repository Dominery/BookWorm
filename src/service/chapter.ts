import { CHAPTER_URL } from 'utils/conf'
import { ajaxPostProxy } from 'utils/request'

function getChapters(bookId: number, chapterIdList: string[], v: number): Promise<any[]> {
  return ajaxPostProxy(CHAPTER_URL, {
    bookId,
    chapterIdList,
    v,
  }).then((getData) => {
    return getData.list
  })
}

export default getChapters
