import { addToCart, updateCartQty } from "../../service";

const moveToCartHandler = (_id, product, token, cartState, cartDispatch) => {
    const { cart } = cartState;
    const item = cart.find(item => item._id === _id);
    if(item){
        updateCartQty(_id, token, "increment", cartDispatch)
    }else{
        addToCart(product, token, cartDispatch)
    }
}

export { moveToCartHandler}
