import axios from "axios";

const addToCart = async (product, token, cartDispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/user/cart",
      data: { product },
      headers: { authorization: token },
    });

    if (response.status === 201) {
      cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    }

    else throw new Error();
  }

  catch (error) {
    alert(error);

  }
};

export { addToCart };
