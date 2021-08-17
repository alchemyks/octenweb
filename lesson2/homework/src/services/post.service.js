import axios from "axios"

let config = {
    baseURL: "https://jsonplaceholder.typicode.com/posts"
};
let axiosInstance = axios.create(config);

const getPosts = () => {
  return axiosInstance.get('');
};

const getPost = (id) => {
  return axiosInstance.get(id);
};

export {getPosts, getPost}