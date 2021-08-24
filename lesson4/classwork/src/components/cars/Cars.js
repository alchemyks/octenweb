import {useEffect, useState} from "react";
import {getCars} from "../../services/cars.api.service";
import Car from "./Car";
import Form from "./Form";

export default function Cars({count}){
    let [cars, setCars] = useState([]);
        useEffect(()=>{
        getCars().then(value => setCars([...value]))

    },[])
    let [formData, setFormData] = useState(NaN);
   const updateCarList = (car)=>{
        setCars([...cars, car])
   }

   let setFormValue = (value)=>{
        console.log(value)
            setFormData(value);
   }



    return(
        <div className={'cars_box'}>
            <Form updateCarList={updateCarList} valueForm={formData} />
            {
                [...cars].reverse().map(value => {
                return(
                <Car key={value.id} item={value} setFormData={setFormValue}/>
                );
            })
            }
        </div>
    );

}