import React, { useState } from 'react';
// import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { products, categories } from "../component/data/products";
import "../styles/admin.css";
import { TiDelete } from "react-icons/ti";
import { CiSaveUp1 } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci"; // Assuming you have a CSS file for styles

const Admin = () => {
  const [productList, setProductList] = useState(products);
  const [isEditing, setIsEditing] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
    brand: 'Aroma Luxe',
    size: '',
    category: 'men'
  });


  const handleEdit = (product) => {
    setIsEditing(product.id);
    setNewProduct(product);
  };

  const handleSave = () => {
    if (isAdding) {
      const id = Math.max(...productList.map(p => p.id)) + 1;
      const productToAdd = { ...newProduct, id };
      setProductList([...productList, productToAdd]);
      setIsAdding(false);
    } else if (isEditing) {
      setProductList(productList.map(p => 
        p.id === isEditing ? { ...newProduct } : p
      ));
      setIsEditing(null);
    }
    setNewProduct({
      name: '',
      price: 0,
      image: '',
      description: '',
      brand: 'Aroma Luxe',
      size: '',
      category: 'men'
    });
  };

  const handleDelete = (id) => {
    setProductList(productList.filter(p => p.id !== id));
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    setNewProduct({
      name: '',
      price: 0,
      image: '',
      description: '',
      brand: 'Aroma Luxe',
      size: '',
      category: 'men'
    });
  };

  return (
    <div className="admin-container">
      <div className="admin-content">
        <div className="admin-header">
          <h1 className="admin-title">Admin Dashboard</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="add-product-btn"
          >
            <CiSquarePlus size={20} />
            <span>Add Product</span>
          </button>
        </div>

        {/* Add/Edit Form */}
        {(isAdding || isEditing) && (
          <div className="product-form">
            <h2 className="form-title">
              {isAdding ? 'Add New Product' : 'Edit Product'}
            </h2>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                className="form-input"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Size"
                value={newProduct.size}
                onChange={(e) => setNewProduct({...newProduct, size: e.target.value})}
                className="form-input"
              />
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                className="form-select"
              >
                {categories.filter(cat => cat.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Brand"
                value={newProduct.brand}
                onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                className="form-input"
              />
            </div>
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              className="form-textarea"
              rows={3}
            />
            <div className="form-actions">
              <button
                onClick={handleSave}
                className="save-btn"
              >
                <CiSaveUp1 size={16} />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="cancel-btn"
              >
                <TiDelete size={16} />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="products-table">
          <div className="table-container">
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {productList.map((product) => (
                  <tr key={product.id} className="table-row">
                    <td className="table-cell">
                      <div className="product-info">
                        <img className="product-image" src={product.image} alt={product.name} />
                        <div className="product-details">
                          <div className="product-name">{product.name}</div>
                          <div className="product-brand">{product.brand}</div>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className="table-text">
                        {categories.find(cat => cat.id === product.category)?.name}
                      </span>
                    </td>
                    <td className="table-cell">
                      <span className="table-text">${product.price}</span>
                    </td>
                    <td className="table-cell">
                      <span className="table-text">{product.size}</span>
                    </td>
                    <td className="table-cell table-actions">
                      <button
                        onClick={() => handleEdit(product)}
                        className="edit-btn"
                      >
                        <CiEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="delete-btn"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;