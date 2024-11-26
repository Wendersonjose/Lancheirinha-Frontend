import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { createProduct } from '../api/apiService';

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await createProduct(data);
      setMessage('Produto criado com sucesso!');
      setFormData({ name: '', price: '', description: '', image: null });
    } catch (error) {
      setMessage('Erro ao criar produto.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: 'auto',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Criar Produto
      </Typography>

      <TextField
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Preço"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Descrição"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        required
      />

      <Button
        variant="outlined"
        component="label"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Enviar Imagem
        <input type="file" hidden accept="image/*" onChange={handleFileChange} />
      </Button>

      {message && (
        <Typography color="success.main" sx={{ marginTop: 2 }}>
          {message}
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Criar Produto
      </Button>
    </Box>
  );
}

export default CreateProduct;
