import React from 'react'
import ToggleMenu from '../toggleMenu/index'

import './index.scss'

interface IProp {
  toggle: JSX.Element
}

function TopBar(props: IProp) {
  const { toggle } = props
  return <div className="top-bar">{toggle}</div>
}

export default TopBar
