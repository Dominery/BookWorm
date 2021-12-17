import React from 'react'
import { ICONS } from 'utils/data'

import './index.scss'

function TypeCard(props: { title: string; children: JSX.Element }) {
  const { title, children } = props
  return (
    <div className="type-card">
      <div className="type-card__head">
        <h2 className="type-card__title">{title}</h2>
        <a href="javascript();" className="type-card__more">
          更多<i className="iconfont" dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}></i>
        </a>
      </div>
      <div className="type-card__body">{children}</div>
    </div>
  )
}

export default TypeCard
