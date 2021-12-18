import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from 'utils/data'

import './index.scss'

function createNav(active: string) {
  return nav.map((item) => (
    <Link to={item.to} key={item.to} className={`tab-bar__item ${active === item.to ? 'tab-bar__item--active' : ''}`}>
      <i
        className="tab-bar__item__icon iconfont"
        dangerouslySetInnerHTML={{ __html: active === item.to ? item.activeIcon : item.icon }}
      />
      <span className="tab-bar__item__title">{item.title}</span>
    </Link>
  ))
}

function TabBar(props: { active?: string }) {
  const { active } = props
  return <div className="tab-bar">{createNav(active)}</div>
}

export default TabBar
