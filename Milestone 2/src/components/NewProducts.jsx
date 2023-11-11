import {Item} from './Item'

import new_products from '../assets/new_collections'

import '../styles/newproducts.css'

export function NewProducts() {
  return (
    <div className="new-products">
      <div className="new-products-container">
        <h1>Produtos novos</h1>
        < hr/>
        <div className="products">
          {new_products.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
       </div>
      </div>
    </div>
  )
}