import React, { useState } from 'react'
import 'images/default-book.png'

function useImgLoad(): [string, React.Dispatch<React.SetStateAction<string>>] {
  const defaultSrc = 'images/default-book.png'
  const [src, setSrc] = useState(defaultSrc)
  const newImg = new Image()
  newImg.onload = () => {
    setSrc(newImg.src)
  }
  const newSetSrc = (src) => {
    newImg.src = src
    setSrc(defaultSrc)
  }
  return [src, newSetSrc]
}

function hashCode(str) {
  let hash = 0
  if (str.length === 0) return hash
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

function cacheProxy(func) {
  const cache = {}
  return async function (...params) {
    const key = hashCode(params.reduce((pre, cur) => pre + JSON.stringify(cur), ''))
    const value = cache[key] ?? (await func(...params))
    cache[key] = value
    return value
  }
}

function accessTimeProxy(func, limitMillSec: number) {
  let lastTime = 0
  return function run(...params) {
    const now = Date.now()
    if (now - lastTime > limitMillSec) {
      lastTime = now
      return func(...params)
    }
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(run(...params))
      }, limitMillSec + lastTime - now)
    })
  }
}

export { useImgLoad, cacheProxy, accessTimeProxy }
