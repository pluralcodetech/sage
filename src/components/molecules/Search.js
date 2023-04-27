import React from 'react'
import Input from '../atom/Input'
import Button from '../atom/Button'
import 'boxicons'

const Search = ({searchplaceholder, className, inputclass, inputtype}) => {
  return (
    <div className={className} >
      <Input type={inputtype} placeholder={searchplaceholder} className={inputclass} />
      <div className='srch position-relative col rounded-end'>
      <Button children="Search" className="btn px-3 text-white" />
      <box-icon name='search' size="17px" class="position-absolute searchbar" color="white"></box-icon>
      </div>
    </div>
  )
}

export default Search
