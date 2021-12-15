import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { nav } from 'utils/data'
import './index.scss'

function getMenuList(active: string, setActive: React.Dispatch<React.SetStateAction<string>>) {
  return nav.map((menuInfo) => (
    <Link to={menuInfo.to} key={menuInfo.to} onClick={() => setActive(menuInfo.to)}>
      <div className={`sidebar-menu__item ${active === menuInfo.to ? 'sidebar-menu--active' : ''}`}>
        <i className="sidebar-menu__item__icon iconfont" dangerouslySetInnerHTML={{ __html: menuInfo.icon }}></i>
        <span className="sidebar-menu__item__title">{menuInfo.title}</span>
      </div>
    </Link>
  ))
}

function SideBarMenu() {
  const match = useRouteMatch()
  const [url, setUrl] = useState(match.url)
  return <nav className="sidebar-menu">{getMenuList(url, setUrl)}</nav>
}

export default SideBarMenu
