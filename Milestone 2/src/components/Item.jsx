import { Link } from 'react-router-dom'

import '../styles/item.css'

export function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">R$ {props.new_price}</div>
        <div className="item-prices-old">R$ {props.old_price}</div>
      </div>
    </div>
  )
}
