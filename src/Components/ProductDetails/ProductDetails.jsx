import React, { useEffect, useState } from 'react';
import products from '../Products/Items/Items';
import './ProductDetails.css';

export default function ProductDetails() {
  const imageUrl = localStorage.getItem("imageUrl");
  const id = localStorage.getItem("productId");

  console.log("ProductId", id);

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId (replace with actual data fetching)
    const fetchProductDetails = async () => {
      // Simulate fetching product details from API/database
      const productslist = products;
      const details = await products[id];
      console.log("Products", productslist)
      console.log("Details", details);
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [id]);

  console.log("ProductId", id);

  return (
    <div>
      {productDetails && (
        <div className='container border border-2 border-black rounded-5 d-flex justify-content-evenly mt-4'>
          <div className='w-50 p-5'>
            <img src={imageUrl} alt={productDetails.name} style={{ maxWidth: '100%', marginBottom: '1rem' }}
              className='border rounded-3' />
          </div>
          <div className='d-flex justify-content-center align-content-center flex-column'>
            <h2 className='font-monospace fw-bold'>{productDetails.name}</h2>
            <p className='my-5'>{productDetails.description}</p>
            <p className='fw-bold'>Price: <span className='p-2 text-danger'>{productDetails.price}</span></p>
          </div>
          <div className="d-flex justify-content-end align-items-end m-5">
            <button className='cart-button py-2 px-5 rounded-pill bg-body-secondary text-success fw-bold'>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
