import React, { useEffect } from 'react'
import { useImgLoad } from 'utils/imgLoad'

interface IProp {
  src: string
  className: string
  alt?: string
}

function BookImage(props: IProp) {
  const { src, className, alt } = props
  const [url, setUrl] = useImgLoad()
  useEffect(() => {
    setUrl(src)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])
  return <img src={url} alt={alt} className={className} />
}

export default BookImage
