import React from 'react'

import './index.scss'

function CheckIcon(props: { checked?: boolean; className?: string }) {
  const { checked = false, className = '' } = props
  return <i className={`check-icon ${className} ${checked ? 'check-icon--active' : ''}`}></i>
}
export default CheckIcon
