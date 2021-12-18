import React from 'react'
import { ICONS } from 'utils/data'
import { format } from 'utils/date'

import './index.scss'

function UpdateInfo(props: { chapterName: string; time?: number }) {
  const { chapterName, time } = props
  return (
    <div className="update-info">
      <h3 className="update-info__catalogue">目录</h3>
      <div className="update-info__content">
        <p>最近更新: {format(new Date(time), 'YYYY-MM-DD hh:mm')}</p>
        <p>{chapterName}</p>
      </div>
      <i className="iconfont" dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}></i>
    </div>
  )
}

export default UpdateInfo
