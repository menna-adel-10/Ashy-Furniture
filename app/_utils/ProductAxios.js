const { default: axiosClient } = require('./axiosClient');

const getLatestProducts = () => axiosClient.get('./products?populate=*')
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLatestProducts,
    getProductById
}