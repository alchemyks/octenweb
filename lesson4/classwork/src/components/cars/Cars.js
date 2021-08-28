import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../../services/cars.api.service";
import Car from "./Car";
import Form from "./Form";

export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));

    }, []);
    let [formData, setFormData] = useState(NaN);
    const updateCarList = (car, new_car = false) => {
        if (new_car) {
            setCars([...cars, car]);
        } else {
            setCars([...cars].map((item) => {
                if (item.id === car.id) {
                    return Object.assign({}, item, {model: car.model, year: car.year, price: car.price});
                }
                return item;
            }));
        }
    };

    let setFormValue = (value) => {

        setFormData(value);
    };

    const delCar = (car) => {
        setCars([...cars].filter((item) => item.id !== car.id));
        deleteCar(car).then();
    };

    return (
        <div className={'cars_box'}>
            <Form updateCarList={updateCarList} valueForm={formData}/>
            {
                [...cars].reverse().map(value => {
                    return (
                        <Car key={value.id} item={value} setFormData={setFormValue} delCar={delCar}/>
                    );
                })
            }
        </div>
    );

}