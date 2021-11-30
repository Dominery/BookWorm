import React from 'react'
import { Area, Book } from 'components/index'

import './index.scss'

function BookShelfPage() {
  return (
    <div className="bookshelf">
      <div className="bookshelf__book">
        <Area ratio={1.45}>
          <Book />
        </Area>
      </div>
    </div>
  )
}

export default BookShelfPage
