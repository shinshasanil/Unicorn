import axios from 'axios';

const axiosinstance = axios.create({
    baseURL:'https://fakestoreapi.com',
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Origin, Authorization, Accept',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
});
export default axiosinstance;