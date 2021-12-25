import React from 'react'

import './index.scss'

function NewsTicker(props: { tickers: string[]; className?: string }) {
  const { tickers, className } = props
  return (
    <div className={`news-ticker ${className}`}>
      <div
        className="news-ticker__content"
        style={{ animationDuration: `${tickers.flatMap((s) => s.split('')).length / 4}s` }}
      >
        {generateTickerItem(tickers)}
      </div>
    </div>
  )
}

function generateTickerItem(tickers: string[]) {
  return tickers.map((info, index) => (
    <p className="news-ticker__item" key={info}>
      {info}
    </p>
  ))
}

export default NewsTicker
