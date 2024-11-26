import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await axios.delete(`http://localhost:3000/api/products/${id}`);
        alert('Produto excluído com sucesso!');
        fetchProducts(); // Atualiza a lista de produtos
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
        alert('Erro ao excluir o produto. Tente novamente.');
      }
    }
  };

  const handleEdit = (product) => {
    const newName = window.prompt('Edite o nome do produto:', product.name);
    const newPrice = window.prompt('Edite o preço do produto:', product.price);
    const newDescription = window.prompt(
      'Edite a descrição do produto:',
      product.description
    );

    if (newName && newPrice) {
      updateProduct(product.id, newName, newPrice, newDescription);
    }
  };

  const updateProduct = async (id, name, price, description) => {
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, {
        name,
        price: parseFloat(price),
        description,
      });
      alert('Produto atualizado com sucesso!');
      fetchProducts(); // Atualiza a lista de produtos
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar o produto. Tente novamente.');
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Produtos</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              {product.image && (
                <img
                  src={`http://localhost:3000/uploads/${product.image}`}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">
                  {product.description || 'Sem descrição disponível'}
                </p>
                <p className="card-text">
                  <strong>Preço:</strong>{' '}
                  {product.price
                    ? `R$ ${parseFloat(product.price).toFixed(2)}`
                    : 'Preço não disponível'}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEdit(product)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
