import { dbConnect } from '../axios/axiosInstence';

export const getAllProducts = async () => {
    console.log(dbConnect);
    const response = await dbConnect.get(`/products`);

    return response;
}