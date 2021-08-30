import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.api.services";

export default function UpdateCarForm({setCarForUpdate}){
    let [cars, setCars] = useState([]);
    useEffect(()=>{
        getCars().then(value => setCars([...value]));
    },[]);

    const onSelectCar = (e)=>{

        for (const car of cars) {

            if (car.id === +e.target.value)
                setCarForUpdate(car);
        }
    }

    return(
        <div className={'update_car_box'}>
            <form className={'create_car_form'}>
                <select name="select_car" onChange={onSelectCar}>
                    <option key={'0'} value={undefined}></option>
                    {
                        cars.map(car=><option key={car.id} value={car.id}>{car.model}</option> )
                    }
                </select>
            </form>
        </div>
    )
}