import React from 'react'

import './index.scss'

const sideBar = [
  {
    id: 'bookshelf',
    title: '我的书架',
    icon: '&#xf038;',
  },
  {
    id: 'history',
    title: '浏览历史',
    icon: '&#xe6b4;',
  },
  {
    id: 'find',
    title: '发现',
    icon: '&#xe621;',
  },
  {
    id: 'categories',
    title: '分类',
    icon: '&#xe6a2;',
  },
  {
    id: 'rank',
    title: '榜单',
    icon: '&#xea06;',
  },
]

function getMenuList() {
  return sideBar.map((menuInfo) => (
    <li className="sidebar-menu__item" key={menuInfo.id}>
      <i className="sidebar-menu__item__icon iconfont" dangerouslySetInnerHTML={{ __html: menuInfo.icon }}></i>
      <span className="sidebar-menu__item__title">{menuInfo.title}</span>
    </li>
  ))
}

function SideBarMenu() {
  return (
    <nav className="sidebar-menu">
      <h1 className="sidebar-menu__title">Bookworm</h1>
      <ul className="sidebar-menu__content">{getMenuList()}</ul>
    </nav>
  )
}

export default SideBarMenu
