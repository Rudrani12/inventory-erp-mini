import React from 'react';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h2>Inventory ERP - Mini System</h2>
      <p>By Rudrani Rachita Das</p>
      <Dashboard />
      <ProductList />
    </div>
  );
}
export default App;
