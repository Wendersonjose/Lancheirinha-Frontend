import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';

function App() {
  const [currentTab, setCurrentTab] = useState('list'); // Gerenciar a aba ativa

  return (
    <div>
      {/* Navegação simples para alternar entre as abas */}
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={() => setCurrentTab('list')}>Lista de Produtos</button>
        <button onClick={() => setCurrentTab('create')}>Criar Produto</button>
      </nav>

      <main style={{ padding: '1rem' }}>
        {currentTab === 'list' && <ProductList />}
        {currentTab === 'create' && <CreateProduct />}
      </main>
    </div>
  );
}

export default App;
