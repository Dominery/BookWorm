import React from 'react'

import '../header.scss'
function BoxHeader(props: { children?: JSX.Element; left?: JSX.Element; right?: JSX.Element; className?: string }) {
  const { left, right, children, className = '' } = props
  return (
    <div className={`header box-header ${className}`}>
      {left}
      {children && <div className="header__content">{children}</div>}
      {right}
    </div>
  )
}

export default BoxHeader
