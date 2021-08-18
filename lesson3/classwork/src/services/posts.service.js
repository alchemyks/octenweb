import axios from 'axios';

const config = {
    baseURL: "https://jsonplaceholder.typicode.com/posts/"
};

const axiosInstance = axios.create(config);
const getPosts = ()=>axiosInstance.get('');
const getPostsByUserId = (userId)=>axiosInstance.get('/?userId='+userId);

export {getPostsByUserId, getPosts}