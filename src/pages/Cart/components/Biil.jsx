const Bill = ({cartQuantity, cartGrossPrice, cartTaxAmount, cartShipingPrice, cartTotalPrice}) => {
    return (
      <div className="price-cart">
        <h1>Price Details</h1>
        <hr />
  
        <h4>
          <span>Subtotal of {cartQuantity} item:</span>
          <span>₹ {cartGrossPrice} </span>
        </h4>
  
        <h4>
          <span>Tax (5%):</span>
          <span>₹ {cartTaxAmount}</span>
        </h4>
  
        <h4>
          <span>Shipping:</span>
          <span>₹{cartShipingPrice} </span>
        </h4>
        <hr />
  
        <h3>
          <span>Total</span>
          <span>₹ {cartTotalPrice}</span>
        </h3>
        <hr />
  
        <div className="place-order">
          <button>Place Order</button>
        </div>
      </div>
    );
  };
  
  export { Bill }
  