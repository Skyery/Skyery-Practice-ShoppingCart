import axios from 'axios';
const productsRequest = axios.create({
    baseURL: 'http://localhost:8080/'
});
export const getProductsRequest = () => productsRequest.get('/products');