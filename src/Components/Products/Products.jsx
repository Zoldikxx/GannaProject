import React from 'react';
import styles from './Products.module.css';
import { useNavigate } from 'react-router-dom';

import products from './Items/Items'; 


export default function Products() {
  const navigate = useNavigate(); 

  
  const navigateToProductDetails = (productId, imageUrl) => {
    localStorage.setItem("imageUrl", imageUrl);
    localStorage.setItem("productId", productId);
    
    navigate(`/productDetails`);
  };

  return (
    <div className={styles.products}>
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div className="col-md-3 my-3" key={product.id}>
              <div className="card" onClick={() => navigateToProductDetails(product.id, product.imageUrl)} style={{ cursor: 'pointer' }}>
                <img src={product.imageUrl} alt={product.name} className='w-100' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
