const baseURL = 'https://jsonplaceholder.typicode.com/';

const getUsers = ()=>fetch(baseURL+'users').then(value => value.json());
const getPosts = ()=>fetch(baseURL+'posts').then(value => value.json());
const getUserById = (userId)=>fetch(baseURL+`users/?id={userId}`).then(value => value.json());

export  {getUserById, getUsers, getPosts};
