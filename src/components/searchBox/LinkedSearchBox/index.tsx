import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../index'

function LinkedSearchBox(props: { to: string }) {
  return (
    <Link to={props.to} style={{ display: 'block', width: '100%' }}>
      <SearchBox />
    </Link>
  )
}

export default LinkedSearchBox
