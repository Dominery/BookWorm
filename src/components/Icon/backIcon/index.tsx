import React from 'react'
import { ICONS } from 'utils/data'

import './index.scss'
function BackIcon(props: { className?: string }) {
  const { className = '' } = props
  const back = () => {
    window.history.back()
  }
  return (
    <i
      className={`iconfont back_icon ${className}`}
      onClick={back}
      dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}
    ></i>
  )
}

export default BackIcon
