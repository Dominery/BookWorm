import React from 'react'

import './index.scss'
function LoadingIcon(props: { className?: string }) {
  const { className = '' } = props
  return <i className={`loading-icon ${className}`}></i>
}

export default LoadingIcon
