import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Bird,
  Cat,
  Dog,
  Fish,
  PawPrint,
  ShoppingCartSimple
} from 'phosphor-react'

import { ShopContext } from '../context/ShopContext'

import logo from '../assets/logo.png'

import '../styles/navbar.css'

export function Navbar() {
  const [menu, setMenu] = useState('home')

  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link style={{ textDecoration: 'none' }} to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu('all')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/products">
            Todos
          </Link>
          {menu === 'all' ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('dog')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/dog">
            <Dog /> Cachorro
          </Link>
          {menu === 'dog' ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('cat')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/cat">
            <Cat /> Gato
          </Link>
          {menu === 'cat' ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('bird')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/bird">
            <Bird /> Passáro
          </Link>
          {menu === 'bird' ? <h /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('fish')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/fish">
            <Fish /> Peixe
          </Link>
          {menu === 'fish' ? <h /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none' }} to="/signin">
          <button>
            <PawPrint size={30} color="#FFD500" weight="fill" />
            Login
          </button>
        </Link>
        <Link to="/cart">
          <ShoppingCartSimple size={40} color="#00296B" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
