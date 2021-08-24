//const baseURL= "http://195.72.146.25/api/v1/cars"
const baseURL= "http://91.201.233.14/api/v1/cars"

const getCars = ()=>fetch(baseURL).then(value => value.json());

const postCar = (car)=>fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then();

export {getCars, postCar}