
import React from 'react';
import Navbar from './components/Navbar';
import CatWidget from './components/CatWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <CatWidget />
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;

