import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/loginsignin.css'

export function LoginSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = e => {
    const value = e.target.value
    setEmail(value)
    setIsButtonDisabled(!(value && password.length >= 6))
    setErrorMessage('')
  }

  const handlePasswordChange = e => {
    const value = e.target.value
    setPassword(value)
    setIsButtonDisabled(!(email && value.length >= 6))
    setErrorMessage('')
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um email válido.')
      return
    }

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const user = await response.json()

      if (user) {
        if (email.endsWith('@admin.com')) {
          window.location.href = '/admin'
        } else {
          alert('Bem vindo :)')
          window.location.href = '/'
        }
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.')
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.')
    }
  }

  return (
    <div className="loginsignin">
      <div className="loginsignin-container">
        <h1>Entre na sua conta</h1>
        <div className="loginsignin-fields">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            minLength="6"
            required
            placeholder="Digite sua senha"
          />
        </div>
        <button
          type="submit"
          disabled={isButtonDisabled}
          onClick={handleSubmit}
        >
          Entrar
        </button>
        {errorMessage && <p className="loginsignin-error">{errorMessage}</p>}
        <p className="loginsignin-register">
          Ainda não possui uma conta?{' '}
          <Link style={{ textDecoration: 'none' }} to="/signup">
            <span>Cadastre-se aqui</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
