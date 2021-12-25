import React from 'react'

import './index.scss'
function Layout(props: {
  header?: JSX.Element
  footer?: JSX.Element
  children: JSX.Element
  contentClass?: string
  contentRef?: React.MutableRefObject<any>
  onTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void
  onTouchEnd?: (e: React.TouchEvent<HTMLDivElement>) => void
}) {
  const { header, footer, children, contentClass = '', contentRef, ...attrs } = props
  if (contentRef) {
    ;(attrs as any).ref = contentRef
  }
  return (
    <div className="layout">
      {header}
      <main {...attrs} className={`layout__content ${contentClass}`}>
        {children}
      </main>
      {footer}
    </div>
  )
}

export default Layout
