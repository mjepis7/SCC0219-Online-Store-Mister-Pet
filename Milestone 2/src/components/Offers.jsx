import { Link } from 'react-router-dom'

import exclusive_image from '../assets/exclusive_image.png'

import '../styles/offers.css'

export function Offers() {
  return (
    <div className="offers">
      <div className="offers-container">
        <div className="text-container">
          <h1>OFERTAS EXCLUSIVAS</h1>
          <h1>Para você e seu pet</h1>
          <p>Apenas os melhores produtos</p>
          <Link style={{ textDecoration: 'none' }} to="/products">
            <button>Confira agora</button>
          </Link>
        </div>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}
