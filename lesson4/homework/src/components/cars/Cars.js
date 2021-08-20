import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.api.service";
import Car from "./Car";

export default function Cars(){
    let [cars, setCars] = useState([]);
    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    },[]);
    return(
        <div className={'cars_box'}>
            {
                cars.reverse().map(value => {
                   return(
                       <Car key={value.id} item={value}/>
                   );
                })
            }
        </div>
    );

}