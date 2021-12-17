import React from 'react'

import './index.scss'
function Layout(props: { header?: JSX.Element; footer?: JSX.Element; children: JSX.Element }) {
  const { header, footer, children } = props
  return (
    <div className="layout">
      {header}
      <main className="layout__content">{children}</main>
      {footer}
    </div>
  )
}

export default Layout
