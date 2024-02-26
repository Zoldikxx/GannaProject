import React from 'react';
import styles from './Products.module.css';
import { useNavigate } from 'react-router-dom';

import assets from '../../projects_assets/flower-pot/products/productImages';


export default function Products() {
  const navigate = useNavigate(); 

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      imageUrl: assets.image0,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      imageUrl: assets.image1,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for Product 3.',
      imageUrl: assets.image2,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the description for Product 4.',
      imageUrl: assets.image3,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is the description for Product 5.',
      imageUrl: assets.image4,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'This is the description for Product 6.',
      imageUrl: assets.image5,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'This is the description for Product 7.',
      imageUrl: assets.image6,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'This is the description for Product 8.',
      imageUrl: assets.image7,
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'This is the description for Product 9.',
      imageUrl: assets.image8,
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'This is the description for Product 10.',
      imageUrl: assets.image9,
    },
    {
      id: 11,
      name: 'Product 11',
      description: 'This is the description for Product 11.',
      imageUrl: assets.image10,
    },
    {
      id: 12,
      name: 'Product 12',
      description: 'This is the description for Product 12.',
      imageUrl: assets.image11,
    },
    {
      id: 13,
      name: 'Product 13',
      description: 'This is the description for Product 13.',
      imageUrl: assets.image12,
    },
    {
      id: 14,
      name: 'Product 14',
      description: 'This is the description for Product 14.',
      imageUrl: assets.image13,
    },
    {
      id: 15,
      name: 'Product 15',
      description: 'This is the description for Product 15.',
      imageUrl: assets.image14,
    },
  ];
  
  
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
