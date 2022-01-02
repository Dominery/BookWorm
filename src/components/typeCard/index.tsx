import React from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from 'utils/data'

import './index.scss'

function TypeCard(props: {
  title: string
  children: JSX.Element
  pathname?: string
  state?: { from: string; params: string | number }
}) {
  const { title, children, pathname = '#', state } = props
  return (
    <div className="type-card">
      <div className="type-card__head">
        <h2 className="type-card__title">{title}</h2>
        <Link to={{ pathname, state }} className="type-card__more">
          更多<i className="iconfont" dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}></i>
        </Link>
      </div>
      <div className="type-card__body">{children}</div>
    </div>
  )
}

export default TypeCard
