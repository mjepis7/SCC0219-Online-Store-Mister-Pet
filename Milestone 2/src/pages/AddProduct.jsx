import React, { useState, useContext, useEffect } from 'react'

import { ShopContext } from '../context/ShopContext'

import '../styles/addproduct.css'

export function AddProduct() {
  const { addProduct } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    image: '',
    new_price: '',
    description: '',
    stock: '',
    sold: ''
  })
  const [formValid, setFormValid] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleImageUpload = e => {
    const file = e.target.files[0]
    setFormData({
      ...formData,
      image: file
    })
  }

  const checkFormValidity = () => {
    const { id, name, image, new_price, description, stock, sold } = formData
    const isValid =
      id && name && image && new_price && description && stock && sold
    setFormValid(isValid)
  }

  useEffect(() => {
    checkFormValidity()
  }, [formData])

  const handleSubmit = e => {
    e.preventDefault()
    addProduct(formData)
    alert('Produto adicionado com sucesso!')
    setFormData({
      id: '',
      name: '',
      image: '',
      new_price: '',
      description: '',
      stock: '',
      sold: ''
    })
  }

  return (
    <div className="add-product">
      <h1>Adicionar Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            step="0.01"
            id="new_price"
            name="new_price"
            value={formData.new_price}
            onChange={handleChange}
            placeholder="Preço"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Quantidade em estoque"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="sold"
            name="sold"
            value={formData.sold}
            onChange={handleChange}
            placeholder="Quantidade vendida"
            required
          />
          <button type="submit" disabled={!formValid}>
            Adicionar Produto
          </button>
        </div>
      </form>
    </div>
  )
}
