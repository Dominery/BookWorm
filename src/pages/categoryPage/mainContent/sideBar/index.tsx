import React from 'react'

import './index.scss'
function SideBar(props: {
  categories: {
    categoryId: number
    categoryName: string
  }[]
  onClick: (categoryId: number) => void
  active: number
}) {
  return (
    <ul className="side-bar">
      <li className="side-bar__item">全部分类</li>
      {createSidebarItem(props.categories, props.onClick, props.active)}
    </ul>
  )
}

function createSidebarItem(
  categories: {
    categoryId: number
    categoryName: string
  }[],
  click: (categoryId: number) => void,
  active: number,
) {
  return categories.map((category) => (
    <li
      className={`side-bar__item ${active === category.categoryId ? 'side-bar__item--active' : ''}`}
      key={category.categoryId}
      onClick={() => click(category.categoryId)}
    >
      {category.categoryName}
    </li>
  ))
}

export default SideBar
