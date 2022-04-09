const Bill = () => {
    return (
      <div className="price-cart">
        <h1>Price Details</h1>
        <hr />
  
        <h4>
          <span>Subtotal:</span>
          <span>₹ 1200 </span>
        </h4>
  
        <h4>
          <span>Tax (5%):</span>
          <span>₹ 60</span>
        </h4>
  
        <h4>
          <span>Shipping:</span>
          <span>₹ 40</span>
        </h4>
        <hr />
  
        <h3>
          <span>Total</span>
          <span>₹ 1300</span>
        </h3>
        <hr />
  
        <p>
          You will save <span>₹ 1200</span> on this order
        </p>
  
        <div className="place-order">
          <button>Place Order</button>
        </div>
      </div>
    );
  };
  
  export { Bill }
  