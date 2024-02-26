import React, { useEffect, useState } from 'react';
import products from './staticItems/staticItems';

export default function ProductDetails() {
  const imageUrl = localStorage.getItem("imageUrl");
  const productId = localStorage.getItem("productId");

  console.log("5555550", productId);
  
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId (replace with actual data fetching)
    const fetchProductDetails = async () => {
      // Simulate fetching product details from API/database
      const details = await products[productId];
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [productId]);

  console.log("111110",productId);

  return (
    <div>
      {productDetails && (
        <div className='d-flex justify-content-evenly'>
          <div>
          <img src={imageUrl} alt={productDetails.name} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
          </div>
          <div>
          <h2>{productDetails.name}</h2>
          <p className='my-5'>{productDetails.description}</p>
          <p>Price: {productDetails.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
