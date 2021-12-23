import React from 'react'
import './index.scss'

interface IProp {
  click: () => void
  className?: string
}

function ToggleIcon(props: IProp) {
  const { click, className = '' } = props
  return (
    <div className={`toggle-icon ${className}`} onClick={click}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default ToggleIcon
