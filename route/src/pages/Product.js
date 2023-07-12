import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams();
  return (
    <div className='content'>{`product ${params.id}`}</div>
  )
}

export default Product