import { useContext } from 'react'

import { ShopContext } from '../context/ShopContext'

import { Star } from 'phosphor-react'

import '../styles/productdisplay.css'

export function ProductDisplay(props) {
  const { product } = props

  const { addToCart } = useContext(ShopContext)

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <Star color="#FFD500" weight="fill" />
          <Star color="#FFD500" weight="fill" />
          <Star color="#FFD500" weight="fill" />
          <Star color="#FFD500" weight="fill" />
          <Star />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            R${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            R${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          tempore error, deserunt accusamus quam ratione rem odit id officia, ex
          earum, itaque provident temporibus assumenda velit minima libero
          deleniti non.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Explicabo tempore error, deserunt accusamus quam ratione rem odit id
          officia, ex earum, itaque provident temporibus assumenda velit minima
          libero deleniti non. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Explicabo tempore error, deserunt accusamus quam
          ratione rem odit id officia, ex earum, itaque provident temporibus
          assumenda velit minima libero deleniti non.Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Explicabo tempore error, deserunt
          accusamus quam ratione rem odit id officia, ex earum, itaque provident
          temporibus assumenda velit minima libero deleniti non.
        </div>
        <button
          onClick={() => {
            addToCart(product.id)
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
