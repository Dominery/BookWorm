import { CATALOGUE_URL } from 'utils/conf'
import { ajaxGetProxy } from 'utils/request'
import { CatalogueInfo } from './type'

function getCatalogue(bookId: number): Promise<CatalogueInfo[]> {
  return ajaxGetProxy(CATALOGUE_URL, {
    params: {
      bookId,
    },
    transformResponse: [
      function (data) {
        let s = data.replace(/"id":(\d+),/g, (_, match) => `"id":"${match}",`)
        return JSON.parse(s)
      },
    ],
  }).then((getData) => {
    const { chapters = [] } = getData
    return chapters
  })
}

export default getCatalogue
