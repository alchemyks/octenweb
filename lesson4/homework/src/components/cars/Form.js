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
                setFormData({...formData, year: e.target.value});
                break;
            default:
                break;
        }
    }
    const checkForm = ()=>{
        return (!(+formData.year >= 1990 && +formData.year <=2020 && formData.model && formData.price));
    }

    const doPostData = ()=>{
        let toPostData = {...formData};
        setFormData(initData)
        postCar(toPostData).then()
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
                    <input type="text" name={'year'} onChange={monitoringStateOnInput} value={formData.year} min={1990} max={2021}/>

                </div>
                <div>
                    <input onClick={()=>doPostData()} className={'add_car_button'} type={'button'} value={'Додати'} disabled={checkForm()}/>
                </div>
            </form>
        </div>
    );
}