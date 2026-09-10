import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({name:'', quantity:'', price:''});
  const fetchProducts = () => {
    axios.get('http://127.0.0.1:8000/api/products').then(r=>setProducts(r.data));
  };
  useEffect(()=>{fetchProducts()},[]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/products', form).then(()=>{fetchProducts(); setForm({name:'',quantity:'',price:''})});
  };
  return (
    <div>
      <h4>Add Product</h4>
      <form onSubmit={handleSubmit} className="row g-2 mb-4">
        <div className="col"><input className="form-control" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
        <div className="col"><input className="form-control" type="number" placeholder="Qty" value={form.quantity} onChange={e=>setForm({...form,quantity:e.target.value})} required/></div>
        <div className="col"><input className="form-control" type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} required/></div>
        <div className="col"><button className="btn btn-primary">Add</button></div>
      </form>
      <table className="table table-bordered">
        <thead><tr><th>Name</th><th>Qty</th><th>Price</th><th>Status</th></tr></thead>
        <tbody>{products.map(p=><tr key={p.id}><td>{p.name}</td><td>{p.quantity}</td><td>{p.price}</td><td>{p.quantity<10?<span className="badge bg-danger">Low</span>:<span className="badge bg-success">In Stock</span>}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
export default ProductList;
