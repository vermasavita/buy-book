const cartBill = (cart) => {
    const cartQuantity = cart.reduce((acc, curr) => acc + Number(curr.qty), 0);
    const grossPrice = cart.reduce((acc, curr) => acc + Number((curr.price * curr.qty)),0)
    const taxAmount = (grossPrice * 5)/100
    const shippingAmount = 40;
    const totalPrice = grossPrice - (taxAmount + shippingAmount);
    return { cartQuantity, grossPrice, totalPrice};
}

  export { cartBill};
