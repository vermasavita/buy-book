import axios from "axios";

const removeFromWishlist = async (_id, token, wishlistDispatch) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: token },
    });

    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });

    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFromWishlist };
