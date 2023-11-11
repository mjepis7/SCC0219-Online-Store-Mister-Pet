import { Link } from 'react-router-dom'

import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

import '../styles/footer.css'

export function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <Link style={{ textDecoration: 'none' }} to="/about">
            Quem somos
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/payments">
            Pagamentos e devoluções
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/exchanges">
            Trocas e devoluções
          </Link>
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-containter">
          <a href="https://www.instagram.com/icmc.usp/">
            <InstagramLogo size={30} color="#dd2a7b" weight="fill" />
          </a>
          <a href="https://www.facebook.com/icmc.usp/">
            <FacebookLogo size={30} color="#1877f2" weight="fill" />
          </a>
          <a href="https://x.com/icmc_usp?s=20">
            <TwitterLogo size={30} color="#00acee" weight="fill" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Rights reserved</p>
      </div>
    </div>
  )
}
