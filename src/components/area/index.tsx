import React from 'react'

import './index.scss'

interface IProp {
  ratio: number
  children: JSX.Element
}

function Area(props: IProp) {
  const { ratio } = props
  return (
    <div className="area__wrapper" style={{ paddingBottom: `${ratio * 100}%` }}>
      <div className="area__stretchy">{props.children}</div>
    </div>
  )
}

export default Area
