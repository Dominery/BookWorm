import React from 'react'
import { ICONS } from 'utils/data'

import './index.scss'

function SearchBox(props: {
  placeholder?: string
  value?: string
  setValue?: (value: string) => void
  className?: string
  searchClick?: (value: string) => void
}) {
  const { placeholder = '', value = '', setValue, searchClick, className = '' } = props
  return (
    <div className={`search-box ${className}`}>
      <div className="search-box__main">
        <i className="iconfont search-box__icon" dangerouslySetInnerHTML={{ __html: '&#xe636;' }}></i>
        <input
          type="text"
          className="search-box__input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue?.(e.target.value)
          }}
        />
        {value && (
          <i
            className="iconfont search-box__cancel"
            dangerouslySetInnerHTML={{ __html: ICONS.CANCEL }}
            onClick={() => setValue?.('')}
          ></i>
        )}
      </div>
      {value && (
        <span
          className="search-box__search"
          onClick={() => {
            searchClick?.(value)
          }}
        >
          搜索
        </span>
      )}
    </div>
  )
}

export default SearchBox
