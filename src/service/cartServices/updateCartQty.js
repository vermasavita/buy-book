import axios from "axios";

const updateCartQty = async (_id, token, actionType, cartDispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart/${_id}`,
      data: { action: { type: actionType } },
      headers: { authorization: token },
    });

    if (response.status === 200) {
      cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};


export { updateCartQty } 
