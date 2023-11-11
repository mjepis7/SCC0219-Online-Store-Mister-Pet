import React, { useState } from 'react'

import '../styles/newsletter.css'

export function NewsLetter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  const handleEmailChange = e => {
    const value = e.target.value
    setEmail(value)
    setMessage('')
    setShowMessage(false)
  }

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailRegex.test(email)) {
      alert('Email cadastrado!')
    } else {
      setMessage('Por favor, digite um email válido.')
    }

    setShowMessage(true)
  }

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <h1>Receba ofertas exclusivas no seu E-mail</h1>
        <p>Inscreva-se e esteja sempre atualizado</p>
        <div>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe}>Inscrever</button>
        </div>
        {showMessage && <p className="newsletter-message">{message}</p>}
      </div>
    </div>
  )
}
