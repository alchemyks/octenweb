import axios from 'axios'

const config = {
    baseURL:  'https://jsonplaceholder.typicode.com/posts/'
}

const axiosInstance = axios.create(config);

const getPostsByUser = (userId)=>axiosInstance.get('?userId='+userId);

const getPosts = ()=>axios.get('');

export {getPostsByUser, getPosts}