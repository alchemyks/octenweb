import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.api.service";
import Car from "./Car";
import Form from "./Form";

export default function Cars(){
    let [cars, setCars] = useState([]);
    useEffect(()=>{
        getCars().then(value => setCars([...value]))
    },[]);

    return(
        <div className={'cars_box'}>
            <Form/>
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