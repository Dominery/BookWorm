import React from 'react'

import './index.scss'

function ColorMenuItem(props: { colors: string[]; currentColor: string; setColor: (color: string) => void }) {
  const { colors, currentColor, setColor } = props
  return <div className="color-menuItem">{generateColors(colors, currentColor, setColor)}</div>
}

function generateColors(colors: string[], currentColor: string, setColor: (color: string) => void) {
  return colors.map((color) => (
    <span
      className={`color-menuItem__color ${currentColor === color ? 'color-menuItem__color--active' : ''}`}
      onClick={() => setColor(color)}
      key={color}
      style={{ backgroundColor: color }}
    ></span>
  ))
}

export default ColorMenuItem
