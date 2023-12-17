import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

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
    e.preventDefault();
  
    // ...
    
    axios.post('mongodb://localhost:27017/mister_pet_db/User', {
      name,
      email,
      phone,
      password
    })
    .then(response => {
      // Tratar a resposta da sua API de acordo com o que você precisa
      if (response.data.success) {
        if (email.endsWith('@admin.com')) {
          alert('Administrador cadastrado com sucesso!');
          window.location.href = '/admin';
        } else {
          alert('Usuário cadastrado com sucesso!');
          window.location.href = '/';
        }
      }
    })
    .catch(error => {
      // Tratar o erro, exibir uma mensagem de erro para o usuário, etc.
      console.error(error);
      setErrorMessage('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.');
    });
  };
  

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
