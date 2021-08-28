const baseURL = 'https://jsonplaceholder.typicode.com'


const baseFetch = (component)=>fetch(baseURL+component).then(response=>response.json());

const getPosts = ()=>baseFetch('/posts');
const getComments = ()=>baseFetch('/comments');
const getUsers = ()=>baseFetch('/users');


export {getComments, getPosts, getUsers}
