import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Shop } from './pages/Shop'
import { ShopAll } from './pages/ShopAll'
import { ShopCategory } from './pages/ShopCategory'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { CheckOut } from './pages/CheckOut'
import { LoginSignUp } from './pages/LoginSignUp'
import { LoginSignIn } from './pages/LoginSignIn'
import { About } from './pages/About'
import { Payments } from './pages/Payments'
import { Exchanges } from './pages/Exchanges'
import { Admin } from './pages/Admin'
import { AddProduct } from './pages/AddProduct'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/dog" element={<ShopCategory category="dog" />} />
          <Route path="/cat" element={<ShopCategory category="cat" />} />
          <Route path="/bird" element={<ShopCategory category="bird" />} />
          <Route path="/fish" element={<ShopCategory category="fish" />} />
          <Route path="/products" element={<ShopAll />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/signup" element={<LoginSignUp />} />
          <Route path="/signin" element={<LoginSignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
