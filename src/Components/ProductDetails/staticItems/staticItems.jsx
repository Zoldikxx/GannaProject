function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[`image${index}`] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('.', false, /\.(png|jpe?g|svg)$/));
  
  const dummyProductDetails = {
    1: { name: 'Product 1', description: 'This is the description for Product 1.', price: '$10' },
    2: { name: 'Product 2', description: 'This is the description for Product 2.', price: '$20' },
    // Add more product details as needed
  };
  
  // Merge product details with image URLs
  const products = Object.keys(dummyProductDetails).map((productId, index) => {
    return {
      id: productId,
      ...dummyProductDetails[productId],
      imageUrl: images[`image${index}`], // Use the imported image URL
      
    };
  });
  
  export default products;
  