import { createContext, useState, useEffect } from 'react'
import { connect } from 'mongodb'

export const ShopContext = createContext(null)

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsFromDB().then(data => setProducts(data))
  }, [])

  const getDefaultCart = () => {
    let cart = {}

    for (let index = 0; index < products.length + 1; index++) {
      cart[index] = 0
    }

    return cart
  }

  const getProductsFromDB = async () => {
    const client = await connect('mongodb://localhost:27017')
    const db = client.db('mister_pet_db')
    const products = await db.collection('Product').find().toArray()

    return products
  }

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const removeFromList = itemId => {
    const updatedProducts = products.filter(product => product.id !== itemId)
    setProducts(updatedProducts)
  }

  const addProduct = productData => {
    setProducts(prev => [...prev, productData])
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(product => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  const getTotalCartItems = () => {
    let totalItem = 0

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product: products,
    cartItems,
    addToCart,
    removeFromCart,
    removeFromList,
    addProduct
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
