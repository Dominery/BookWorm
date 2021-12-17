import React from 'react'

import './index.scss'
function Header(props: { children: JSX.Element; left?: JSX.Element; right?: JSX.Element }) {
  const { left, right, children } = props
  return (
    <div className="header">
      {left && <div className="header__left">{left}</div>}
      <div className="header__content">{children}</div>
      {right && <div className="header__right">{right}</div>}
    </div>
  )
}

export default Header
