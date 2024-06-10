import axios from "axios";

export const dbConnect = axios.create({baseURL: 'http://localhost:3000'});