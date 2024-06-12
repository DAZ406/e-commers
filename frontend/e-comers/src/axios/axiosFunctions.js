import { dbConnect } from '../axios/axiosInstence';

export const getAllProducts = async () => {
    const response = await dbConnect.get(`/products`);

    return response;
}