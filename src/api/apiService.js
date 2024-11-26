import axios from 'axios';

// Atualize a URL após o deploy na AWS
const API_URL = 'http://localhost:3000/api'; // Substitua pelo endpoint do backend na AWS

// Função para obter todos os produtos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error.message);
    throw error;
  }
};

// Função para criar um novo produto
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error.message);
    throw error;
  }
};

// Função para atualizar um produto
export const updateProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${id}`, updatedData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar produto com ID ${id}:`, error.message);
    throw error;
  }
};

// Função para excluir um produto
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir produto com ID ${id}:`, error.message);
    throw error;
  }
};
