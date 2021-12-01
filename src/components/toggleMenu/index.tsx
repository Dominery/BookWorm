import React from 'react'
import './index.scss'

interface IProp {
  click: () => void
  className?: string
}

function ToggleMenu(props: IProp) {
  const { click, className = '' } = props
  return (
    <div className={`toggle-menu ${className}`} onClick={click}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default ToggleMenu
