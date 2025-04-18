function ProduceDetails() {
    const products = [
      { id: 1, name: "Chocolate", price: 50 },
      { id: 2, name: "Biscuit", price: 20 },
      { id: 3, name: "Juice", price: 40 }
    ];
  
    return (
      <div>
        <h2>🛒 Product Details</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
export default ProduceDetails;  