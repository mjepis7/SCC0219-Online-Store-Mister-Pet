import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/loginsignup.css'

export function LoginSignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleNameChange = e => {
    const value = e.target.value
    setName(value)
    setErrorMessage('')
  }

  const handleEmailChange = e => {
    const value = e.target.value
    setEmail(value)
    setErrorMessage('')
  }

  const handlePhoneChange = e => {
    const value = e.target.value.replace(/\D/g, '')
    setPhone(value)
    setErrorMessage('')
  }

  const handlePasswordChange = e => {
    const value = e.target.value
    setPassword(value)
    setErrorMessage('')
  }

  const handleConfirmPasswordChange = e => {
    const value = e.target.value
    setConfirmPassword(value)
    setErrorMessage('')
  }

  const handleRegister = e => {
    e.preventDefault()

    if (!name.trim()) {
      setErrorMessage('Por favor, insira seu nome.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um email válido.')
      return
    }

    if (!phone) {
      setErrorMessage('Por favor, insira seu número de telefone.')
      return
    }

    if (password.length < 6) {
      setErrorMessage('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem. Por favor, tente novamente.')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    const existingUser = users.find(
      user => user.name === name || user.email === email
    )
    if (existingUser) {
      setErrorMessage('Usuário já cadastrado com o mesmo nome ou email.')
      return
    }

    const user = {
      name,
      email,
      phone,
      password
    }

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))

    if (email.endsWith('@admin.com')) {
      alert('Administrador cadastrado com sucesso!')
      window.location.href = '/admin'
    } else {
      alert('Usuário cadastrado com sucesso!')
      window.location.href = '/'
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Crie sua conta</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Digite seu nome"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Digite seu e-mail"
          />
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            required
            placeholder="Digite seu telefone"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            minLength="6"
            required
            placeholder="Digite sua senha"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            minLength="6"
            required
            placeholder="Confirme sua senha"
          />
        </div>
        <button type="submit" onClick={handleRegister}>
          Cadastrar
        </button>
        {errorMessage && <p className="loginsignup-error">{errorMessage}</p>}
        <p className="loginsignup-login">
          Já possui uma conta?{' '}
          <Link style={{ textDecoration: 'none' }} to="/signin">
            <span>Entre aqui</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
