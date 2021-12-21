import React, { useEffect, useState } from 'react'
import { Layout, Header, BackIcon, BookFlip } from 'components/index'
import { useCatalogue } from 'service/index'
import { ICONS } from 'utils/data'

import './index.scss'

interface CatalogueInfo {
  chapterId: number
  name: string
}

function Catalogue({ match }) {
  const [catalogue, getCatalogue, setCatalogue] = useCatalogue()
  const [sequence, SetSequence] = useState(true)
  useEffect(() => {
    getCatalogue(74585)
  })
  const header = (
    <Header left={<BackIcon />}>
      <p>书籍目录</p>
    </Header>
  )
  return (
    <Layout header={header} contentClass="horizon-expand">
      <>
        <div className="catalogue__info">
          <span>共有{catalogue.length}章</span>
          <i
            className="iconfont"
            dangerouslySetInnerHTML={{ __html: sequence ? ICONS.SEQUENCE : ICONS.INVERSE }}
            onClick={sequenceInverse}
          ></i>
        </div>
        <div className="catalogue__content">{catalogue.length === 0 ? <BookFlip /> : createCatalogue(catalogue)}</div>
      </>
    </Layout>
  )
  function sequenceInverse() {
    SetSequence(!sequence)
    setCatalogue(catalogue.reverse())
  }
}

function createCatalogue(catalogue: CatalogueInfo[]) {
  return catalogue.map((item) => (
    <a className="catalogue__item" href="#" key={item.chapterId}>
      {item.name}
    </a>
  ))
}

export default Catalogue
