import React, { useState } from 'react'
import { CATALOGUE_URL } from 'utils/conf'
import { ajaxGetProxy } from 'utils/request'

function useCatalogue(): [any[], (bookId: number) => Promise<void>, React.Dispatch<React.SetStateAction<any[]>>] {
  const [catalogue, setCatalogue] = useState([])
  const getCatalogue = (bookId: number) => {
    return ajaxGetProxy(CATALOGUE_URL, {
      params: {
        bookId,
      },
    }).then((getData) => {
      const { chapters = [] } = getData
      setCatalogue(chapters)
    })
  }
  return [catalogue, getCatalogue, setCatalogue]
}

export default useCatalogue
