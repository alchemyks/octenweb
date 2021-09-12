const baseURL = 'https://jsonplaceholder.typicode.com/'

const fetchUsers = ()=>fetch(`https://jsonplaceholder.typicode.com/${'users'}`).then(response=>response.json());

export {fetchUsers}
