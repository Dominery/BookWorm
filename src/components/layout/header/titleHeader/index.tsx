import React from 'react'

import '../header.scss'
function TitleHeader(props: { children?: JSX.Element; left?: JSX.Element; right?: JSX.Element; className?: string }) {
  const { left, right, children, className = '' } = props
  return (
    <div className={`header ${className}`}>
      {left && <div className="title-header__left">{left}</div>}
      {children && <div className="header__content">{children}</div>}
      {right && <div className="title-header__right">{right}</div>}
    </div>
  )
}

export default TitleHeader
