function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[`image${index}`] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('.', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  