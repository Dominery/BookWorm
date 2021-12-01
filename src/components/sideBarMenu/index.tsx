import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { sideBar } from 'utils/data'
import './index.scss'

function getMenuList(active: string, setActive: React.Dispatch<React.SetStateAction<string>>) {
  return sideBar.map((menuInfo) => (
    <Link to={menuInfo.id} key={menuInfo.id} onClick={() => setActive(menuInfo.id)}>
      <div className={`sidebar-menu__item ${active === menuInfo.id ? 'sidebar-menu--active' : ''}`}>
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
