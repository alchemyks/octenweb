const baseURL = 'http://91.201.233.14//api/v1/cars'

const getCars = () => fetch(baseURL).then(value => value.json());

const appendCar = (car) => fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
}).then(response => response.json());

const updateCarById = (car)=>fetch(baseURL+'/'+car.id, {
    method: 'PUT',
    body: JSON.stringify(car),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
}).then(response=>response.json());

export {getCars, appendCar, updateCarById}