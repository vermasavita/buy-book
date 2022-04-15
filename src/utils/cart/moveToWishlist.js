import { addToWishlist, removeFromCartHandler } from "../../service";

const moveToWishlistHandler = (_id, product, token, wishlistState, wishlistDispatch, cartDispatch) => {
    const { wishlist } = wishlistState;
    const item = wishlist.find(item => item._id === _id);
    if(!item){
        addToWishlist(product, token, wishlistDispatch);
    }else{
        removeFromCartHandler(_id, token, cartDispatch);
    }
}

export { moveToWishlistHandler };
