const baseURL = 'https://jsonplaceholder.typicode.com/'

const getUsers = ()=>fetch(baseURL+'users').then(response=>response.json());

export {getUsers}