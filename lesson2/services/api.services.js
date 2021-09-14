const baseURL = 'https://jsonplaceholder.typicode.com/';

const fetchUsers = ()=>fetch(`${baseURL}users`).then(value => value.json());


export {fetchUsers}
