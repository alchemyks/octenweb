import './Form.css'
import {useState} from "react";
import {postCar} from "../../services/cars.api.service";

export default function Form() {
    let initData = {model: '', price: '', year:''}
    let [formData, setFormData] = useState(initData)

    let monitoringStateOnInput = (e)=>{
        switch (e.target.name) {
            case "model":
                if (+e.target.value.length <= 20) {
                    setFormData({...formData, model: e.target.value});
                }
                break;
            case "price":
                if (+e.target.value >= 0) {
                    setFormData({...formData, price: e.target.value});
                }
                break;
            case "year":
                ////console.log(+e.target.value)
                ///console.log(e.target.value.length)
                console.log((e.target.value.length < 4 && +e.target.value != NaN))

                if ((+e.target.value <= 2021 && +e.target.value >= 1990) || (e.target.value.length < 4 && +e.target.value)) {
                    setFormData({...formData, year: e.target.value});
                }
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <form className={'car_form'} >
                <div>
                    <label htmlFor="{'model'}">Модель: </label>
                    <input type="text" name={'model'} onChange={monitoringStateOnInput} value={formData.model}/>
                </div>
                <div>
                    <label htmlFor="{'price'}">Ціна: </label>
                    <input type="text" name={'price'} onChange={monitoringStateOnInput} value={formData.price}/>
                </div>
                <div>
                    <label htmlFor="{'year'}">Рік випуску: </label>
                    <input type="text" name={'year'} onChange={monitoringStateOnInput} value={formData.year}/>
                </div>
                <div>
                    <input onClick={()=>{
                        setFormData(initData)
                        return(postCar(formData))
                    }} className={'add_car_button'} type={'button'} value={'Додати'}/>
                </div>
            </form>
        </div>
    );
}