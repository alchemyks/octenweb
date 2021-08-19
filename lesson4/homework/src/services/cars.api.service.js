const baseURL= "http://195.72.146.25/api/v1/cars"

const getCars = ()=>fetch(baseURL).then(value => value.json());

const postCar = ()=>fetch(baseURL);

export {getCars, postCar}