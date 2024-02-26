import React, { useEffect, useState } from 'react';
import products from '../Products/Items/Items';

export default function ProductDetails() {
  const imageUrl = localStorage.getItem("imageUrl");
  const id = localStorage.getItem("productId");

  console.log("ProductId", id);
  
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId (replace with actual data fetching)
    const fetchProductDetails = async () => {
      // Simulate fetching product details from API/database
      const productslist =  products;
      const details = await products[id];
      console.log("Products", productslist)
      console.log("Details", details);
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [id]);

  console.log("ProductId",id);

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
