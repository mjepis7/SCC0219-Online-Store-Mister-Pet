import { Link } from 'react-router-dom'

import { ArrowRight } from 'phosphor-react'

import hero_img from '../assets/dog.gif'

import '../styles/hero.css'

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Apenas novidades</h2>
        <div>
          <p>Novos produtos para todos os pets</p>
          <img src={hero_img} alt="" />
        </div>
        <div className="hero-latest-btn">
          <Link style={{ textDecoration: 'none' }} to="/products">
            <button>
              Venha conferir <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  )
}
