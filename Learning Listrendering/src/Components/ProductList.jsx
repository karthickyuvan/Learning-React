function ProductList() {
    const products = ["Chocolate", "Biscuit", "Juice", "Chips"];
  
    return (
      <div>
        <h1>🛍️ Products Available</h1>
        {products.map((item, index) => (
          <p key={index}>👉 {item}</p>
        ))}
      </div>
    );
  }
  export default ProductList;
  