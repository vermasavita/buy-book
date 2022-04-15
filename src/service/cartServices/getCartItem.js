import axios from "axios";

const getCartItemHandler = (token) => {
    return axios({
        method: 'GET',
        url: "/api/user/cart",
        headers: { authorization: token }
    })
}

export { getCartItemHandler };
