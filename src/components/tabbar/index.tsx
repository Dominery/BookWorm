import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { nav } from 'utils/data'

import './index.scss'

function createNav(active: string, setActive: React.Dispatch<React.SetStateAction<string>>) {
  return nav.map((item) => (
    <Link
      to={item.to}
      key={item.to}
      className={`tab-bar__item ${active === item.to ? 'tab-bar__item--active' : ''}`}
      onClick={() => setActive(item.to)}
    >
      <i
        className="tab-bar__item__icon iconfont"
        dangerouslySetInnerHTML={{ __html: active === item.to ? item.activeIcon : item.icon }}
      />
      <span className="tab-bar__item__title">{item.title}</span>
    </Link>
  ))
}

function TabBar() {
  const match = useRouteMatch()
  const [active, setActive] = useState(match.url)
  return <div className="tab-bar">{createNav(active, setActive)}</div>
}

export default TabBar
