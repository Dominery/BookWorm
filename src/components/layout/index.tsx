import React from 'react'

import './index.scss'
function Layout(props: { header?: JSX.Element; footer?: JSX.Element; children: JSX.Element; contentClass?: string }) {
  const { header, footer, children, contentClass = '' } = props
  return (
    <div className="layout">
      {header}
      <main className={`layout__content ${contentClass}`}>{children}</main>
      {footer}
    </div>
  )
}

export default Layout
