import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products')
    .then(res => setProducts(res.data)).catch(()=>setProducts([]));
  }, []);
  
  const totalValue = products.reduce((s, p) => s + (p.quantity * p.price), 0);
  const lowStock = products.filter(p => p.quantity < 10);

  return (
    <div className="row mb-4">
      <div className="col-md-4"><div className="card p-3"><h5>Total Products</h5><h3>{products.length}</h3></div></div>
      <div className="col-md-4"><div className="card p-3"><h5>Stock Value</h5><h3>Rs. {totalValue}</h3></div></div>
      <div className="col-md-4"><div className="card p-3 bg-warning"><h5>Low Stock Alert</h5><h3>{lowStock.length} items</h3></div></div>
    </div>
  );
}
export default Dashboard;
