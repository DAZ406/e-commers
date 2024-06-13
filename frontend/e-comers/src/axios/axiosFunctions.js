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