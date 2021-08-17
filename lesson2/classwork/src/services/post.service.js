import axios from 'axios';

const config = {
    baseURL:'https://jsonplaceholder.typicode.com/posts'
}

const axiosInstance = axios.create(config);

const getPostsUserId = (userId)=>{
    return axiosInstance.get(('/?userId='+userId))};
const getPosts = ()=>axiosInstance.get('');
export {getPosts, getPostsUserId}