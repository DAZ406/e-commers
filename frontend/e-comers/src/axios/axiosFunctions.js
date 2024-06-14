import { dbConnect } from '../axios/axiosInstence';

export const getAllProducts = async () => {
    const response = await dbConnect.get(`/products`);

    return response;
}

export const filterProducts = async (name) => {
    const response = await dbConnect.get(`/products/${name}`);

    return response;
}

export const validateUser = async (username, password) => {
    const response = await dbConnect.post(`/users/log-in`,{
        username: username,
        password: password
    });

    return response;
}

export const validateToken = async (token) => {
    const response = await dbConnect.get(`/users/authenticate`,{headers: {
        authorization: token
      }});

    return response;
}

export const createNewOrder = async (user) => {
    const response = await dbConnect.post(`/orders/new-order`, {
        user: user
    } );

    return response;
}
export const addNewOrderProduct = async (order_id, product_id, purchased_amount) => {
    const response = await dbConnect.post(`/ordered-products/new-ordered-product`,{purchased_amount: purchased_amount,
        order_id: order_id,
        product_id: product_id
    });

    return response;
}

export const updateProductAmount = async (product_id, amount) => {
    const response = await dbConnect.patch(`/products/${product_id}`,{amount: amount});

    return response;
}