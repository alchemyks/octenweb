const baseURL = "https://jsonplaceholder.typicode.com/users";
const getUsers = () => fetch(baseURL).then(value => value.json());

export {getUsers}