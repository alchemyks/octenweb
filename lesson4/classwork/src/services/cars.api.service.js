//const baseURL= "http://195.72.146.25/api/v1/cars"
const baseURL= "http://91.201.233.14/api/v1/cars"

const getCars = ()=>fetch(baseURL).then(value => value.json());


const deleteCar = (car)=>{
    return fetch(baseURL+'/'+car.id,{
        method:'DELETE',
        body: JSON.stringify(car),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then();
 //   }).then(response => response.json());
}

const postCar = (car)=> {
    if (car.id){
        //http://<IP>/api/v1/cars/<ID>
       return  fetch(baseURL + '/' + car.id, {
            method: 'PUT',
            body: JSON.stringify(car),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => {
            return response.json()});
    }else {
        return  fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(car),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json());
    }
}
export {getCars, postCar, deleteCar}
