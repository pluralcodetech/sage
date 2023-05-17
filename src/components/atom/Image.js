import React from 'react'

const Image = ({src, alt, className, ...rest }) => {
  return (
    <img src={src} alt={alt} {...rest} className={className}/>
  )
}

export default Image
