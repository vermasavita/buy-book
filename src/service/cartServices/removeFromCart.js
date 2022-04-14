import axios from "axios";

const removeFromCartHandler = async (_id, token, cartDispatch) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: token }
    });

    if (response.status === 200) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromCartHandler };
