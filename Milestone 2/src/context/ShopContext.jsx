import { createContext, useState, useEffect, useCallback } from "react";

export const ShopContext = createContext(null);

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState();
  const [products, setProducts] = useState([]);

  const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < products.length + 1; index++) {
      cart[index] = 0;
    }

    return cart;
  };

  const getProductsFromDB =  () => {
    const productsUrl = "https://localhost:3001/products";
    fetch(productsUrl, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
      });

    return products;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFromList = (itemId) => {
    const updatedProducts = products.filter((product) => product.id !== itemId);
    setProducts(updatedProducts);
  };

  const addProduct = (productData) => {
    setProducts((prev) => [...prev, productData]);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const asyncGetDefaultCart = useCallback(async () => {getDefaultCart()});
  const asyncGetProductsFromDB = useCallback(async () => {getProductsFromDB()})

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product: products,
    cartItems,
    addToCart,
    removeFromCart,
    removeFromList,
    addProduct,
  };

  useEffect(() => {
    asyncGetDefaultCart();
    asyncGetProductsFromDB();
  }, []);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
