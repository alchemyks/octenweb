const baseURL='https://jsonplaceholder.typicode.com/comments';

const getComments = ()=>fetch(baseURL).then(value => value.json());

export {getComments}