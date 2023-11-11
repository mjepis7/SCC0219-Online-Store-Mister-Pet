import data_product from '../assets/data'

import { Item } from './Item'

import '../styles/relatedproducts.css'

export function RelatedProducts() {
  return (
    <div className="relatedproducts">
      <h1>Produtos relacionados</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}
