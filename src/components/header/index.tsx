import React from 'react'

import './index.scss'
function Header(props: { children: JSX.Element; left?: JSX.Element; right?: JSX.Element }) {
  const { left, right, children } = props
  return (
    <div className="header">
      {left}
      {children}
      {right}
    </div>
  )
}

export default Header
