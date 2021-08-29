import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.api.services";
import Car from "./Car";

export default function Cars() {
    let [cars, setCars] = useState([])
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, [])
    return (
        <div className={'cars_box'}>
            {
                cars.map(value => {
                    return (
                        <Car key={value.id} item={value}/>
                    )
                })
            }
        </div>
    )
}