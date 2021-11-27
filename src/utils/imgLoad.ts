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

export { useImgLoad }
