import axios from "axios";

const addToWishlist = async (product, token, wishlistDispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/user/wishlist",
      data: { product },
      headers: { authorization: token },
    });

    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { addToWishlist };
