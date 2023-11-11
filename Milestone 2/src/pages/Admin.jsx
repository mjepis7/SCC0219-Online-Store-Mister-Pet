import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { ShopContext } from '../context/ShopContext'

import '../styles/admin.css'

export function Admin() {
  const { all_product, removeFromList } = useContext(ShopContext)
  const [itemsToExclude, setItemsToExclude] = useState([])
  const [changesSaved, setChangesSaved] = useState(false)
  const [editedItems, setEditedItems] = useState({})

  const handleExclude = id => {
    setItemsToExclude([...itemsToExclude, id])
  }

  const handleEdit = (id, field, value) => {
    setEditedItems({
      ...editedItems,
      [id]: {
        ...editedItems[id],
        [field]: value
      }
    })
  }

  const handleSaveChanges = () => {
    removeFromList(itemsToExclude)
    setChangesSaved(true)
    alert('Alterações salvas com sucesso!')
  }

  return (
    <div className="admin">
      <div className="admin-format-main">
        <p>ID</p>
        <p>Nome</p>
        <p>Preço</p>
        <p>Categoria</p>
        <p>Quantidade em estoque</p>
        <p>Quantidade vendida</p>
        <p>Excluir</p>
      </div>
      <hr />
      {all_product.map(e => (
        <div key={e.id}>
          {!itemsToExclude.includes(e.id) && (
            <div className="admin-format admin-format-main">
              <p>{e.id}</p>
              <p>
                <input
                  type="text"
                  value={editedItems[e.id]?.name || e.name}
                  onChange={event =>
                    handleEdit(e.id, 'name', event.target.value)
                  }
                />
              </p>
              <p>
                <input
                  type="number"
                  value={editedItems[e.id]?.new_price || e.new_price}
                  onChange={event =>
                    handleEdit(e.id, 'new_price', event.target.value)
                  }
                />
              </p>
              <p>
                <input
                  type="text"
                  value={editedItems[e.id]?.category || e.category}
                  onChange={event =>
                    handleEdit(e.id, 'category', event.target.value)
                  }
                />
              </p>
              <p>
                <input
                  type="number"
                  value={editedItems[e.id]?.stock || e.stock}
                  onChange={event =>
                    handleEdit(e.id, 'stock', event.target.value)
                  }
                />
              </p>
              <p>
                <input
                  type="number"
                  value={editedItems[e.id]?.sold || e.sold}
                  onChange={event =>
                    handleEdit(e.id, 'sold', event.target.value)
                  }
                />
              </p>
              <button
                className="admin-remove-button"
                onClick={() => handleExclude(e.id)}
              >
                Excluir
              </button>
            </div>
          )}
        </div>
      ))}
      <div className="admin-add-button">
        <Link style={{ textDecoration: 'none' }} to="/add-product">
          <button type="submit">Adicionar produto</button>
        </Link>
        <button type="button" onClick={handleSaveChanges}>
          Salvar alterações
        </button>
      </div>
      {changesSaved}
    </div>
  )
}
