import React from 'react'
import { ICONS } from 'utils/data'

import './index.scss'

function BackTopIcon(props: { className?: string; onClick: () => void }) {
  const { className, onClick } = props
  return (
    <i
      className={`iconfont back-top-icon ${className}`}
      dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}
      onClick={onClick}
    />
  )
}

export default BackTopIcon
