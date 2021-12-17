import React from 'react'

import './index.scss'

function SearchBox(props: { placeholder?: string }) {
  const { placeholder = '' } = props
  return (
    <div className="search-box">
      <i className="iconfont search-box__icon" dangerouslySetInnerHTML={{ __html: '&#xe636;' }}></i>
      <input type="text" className="search-box__input" placeholder={placeholder} />
    </div>
  )
}

export default SearchBox
