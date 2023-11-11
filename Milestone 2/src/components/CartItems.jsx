import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ShopContext } from '../context/ShopContext'

import remove_icon from '../assets/cart_cross_icon.png'

import '../styles/cartitems.css'

export function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext)
  const [hasItemsInCart, setHasItemsInCart] = useState(false)

  useEffect(() => {
    const hasItems = all_product.some(e => cartItems[e.id] > 0)
    setHasItemsInCart(hasItems)
  }, [all_product, cartItems])

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Produtos</p>
        <p>Nome</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {hasItemsInCart ? (
        all_product.map(e => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img className="carticon-product-icon" src={e.image} alt="" />
                  <p>{e.name}</p>
                  <p>R$ {e.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>R$ {e.new_price * cartItems[e.id]}</p>
                  <img
                    className="cartitems-remove-icon"
                    src={remove_icon}
                    alt=""
                    onClick={() => {
                      removeFromCart(e.id)
                    }}
                  />
                </div>
                <hr />
              </div>
            )
          }
          return null
        })
      ) : (
        <div className="empty-cart-message">Carrinho vazio.</div>
      )}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total do pedido</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Taxa de envio</p>
              <p>Grátis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>R$ {getTotalCartAmount()}</h3>
            </div>
            {hasItemsInCart && (
              <Link to="/checkout">
                <button>Ir para pagamento</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
