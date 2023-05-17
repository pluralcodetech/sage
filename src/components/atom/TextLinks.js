import React from 'react'
import { Link } from 'react-router-dom'

const TextLinks = ({to, children, className, ...rest}) => {
  return (
    <Link to={to} className={className} {...rest}>{children}</Link>
  )
}

export default TextLinks
