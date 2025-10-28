import React, { useContext } from "react";

import { ProductProvider, ProductContext } from "./ProductContext/ProductContext";
import './App.css';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h3 className='text-blue-400 mx-2'>Sai Multi Export Import </h3>
      <h2>Product List</h2>
      {products.map((p) => (
        <div key={p.id}>
          <strong>{p.name}</strong> - ${p.price}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};

export default App;
