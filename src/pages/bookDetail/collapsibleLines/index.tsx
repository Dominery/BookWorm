import React, { useState } from 'react'
import { ICONS } from 'utils/data'

import './index.scss'
function CollapsibleLines(props: { lines: string }) {
  const { lines } = props
  const [unfold, setUnfold] = useState(false)
  return (
    <div
      className={`collapsible-lines ${unfold ? '' : 'collapsible-lines--unfold'}`}
      onClick={() => setUnfold(!unfold)}
    >
      <p className="collapsible-lines__content">{lines}</p>
      <i className="iconfont" dangerouslySetInnerHTML={{ __html: ICONS.RIGHT_ARROW }}></i>
    </div>
  )
}

export default CollapsibleLines
