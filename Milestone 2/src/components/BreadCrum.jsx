import { CaretRight } from 'phosphor-react'

import '../styles/breadcrum.css'

export function BreadCrum(props) {
  const { product } = props

  return (
    <div className="breadcrum">
      HOME <CaretRight /> SHOP <CaretRight /> {product.category} <CaretRight />{' '}
      {product.name}
    </div>
  )
}
