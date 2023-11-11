import React, { useContext, useState } from 'react'

import { ShopContext } from '../context/ShopContext'

import { CreditCard, MapPin } from 'phosphor-react'

import '../styles/checkout.css'

export function CheckOut() {
  const { getTotalCartAmount } = useContext(ShopContext)

  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')
  const [bairro, setBairro] = useState('')
  const [estado, setEstado] = useState('')
  const [numero, setNumero] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [nomeCartao, setNomeCartao] = useState('')
  const [vencimento, setVencimento] = useState('')
  const [cvv, setCvv] = useState('')

  const handleBlur = () => {
    const cepDigits = cep.replace(/\D/g, '')

    if (cepDigits.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepDigits}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            setCidade(data.localidade)
            setBairro(data.bairro)
            setEstado(data.uf)
          } else {
            alert('CEP não encontrado')
          }
        })
        .catch(error => {
          console.error('Erro ao buscar CEP:', error)
        })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !cidade ||
      !bairro ||
      !estado ||
      !numero ||
      !numeroCartao ||
      !nomeCartao ||
      !vencimento ||
      !cvv
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    alert('Compra realizada com sucesso!')
    window.location.href = '/'
  }

  return (
    <div className="checkout">
      <div className="wrapper">
        <div className="checkout-info">
          <div className="checkout-title">
            <MapPin size={25} />
            <h2>Endereço</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={cep}
              onChange={e => setCep(e.target.value)}
              placeholder="CEP"
              onBlur={handleBlur}
              required
            />
            <input
              type="text"
              value={cidade}
              placeholder="Cidade"
              readOnly
              required
            />
            <input
              type="text"
              value={bairro}
              placeholder="Bairro"
              readOnly
              required
            />
            <input
              type="text"
              value={estado}
              placeholder="Estado"
              readOnly
              required
            />
            <input
              type="number"
              value={numero}
              onChange={e => setNumero(e.target.value)}
              placeholder="Número"
              required
            />
            <input type="text" placeholder="Complemento" />
            <div className="checkout-title">
              <CreditCard size={25} />
              <h2>Pagamento</h2>
            </div>
            <input
              type="number"
              value={numeroCartao}
              onChange={e => setNumeroCartao(e.target.value)}
              placeholder="Número do cartão"
              required
            />
            <input
              type="text"
              value={nomeCartao}
              onChange={e => setNomeCartao(e.target.value)}
              placeholder="Nome impresso no cartão"
              required
            />
            <input
              type="date"
              value={vencimento}
              onChange={e => setVencimento(e.target.value)}
              placeholder="Vencimento"
              maxLength={3}
              required
            />
            <input
              type="number"
              value={cvv}
              onChange={e => setCvv(e.target.value)}
              placeholder="CVV"
              required
            />
            <button type="submit">Finalizar Pedido</button>
          </form>
        </div>
        <div className="checkout-total">
          <h1>Total do pedido</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Taxa de envio</p>
              <p>Grátis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>R$ {getTotalCartAmount()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
