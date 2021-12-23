import React from 'react'
import { ICONS } from 'utils/data'

import './index.scss'
function FontMenuItem(props: { fontSize: number; setFontSize: (size: number) => void; className?: string }) {
  const { fontSize, setFontSize, className = '' } = props
  return (
    <div className={`font-menuItem ${className}`}>
      <i
        className="iconfont"
        dangerouslySetInnerHTML={{ __html: ICONS.FONT_SIZE_DOWN }}
        onClick={() => setFontSize(fontSize - 1)}
      ></i>
      <span className="font-menuItem__size">{fontSize}</span>
      <i
        className="iconfont"
        dangerouslySetInnerHTML={{ __html: ICONS.FONT_SIZE_UP }}
        onClick={() => setFontSize(fontSize + 1)}
      ></i>
    </div>
  )
}

export default FontMenuItem
