import axios from "axios";

const getWishlistItem = async (token, wishlistDispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/wishlist",
      headers: { authorization: token },
    });

    if (response.status === 200) {
      wishlistDispatch({
        type: "GET_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(response.data);
  }
};

export { getWishlistItem };
