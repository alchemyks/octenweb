import {useEffect, useState} from "react";
import './CreateCarForm.css'

export default function CreateCarForm() {

    const initFormData = {model: '', price: '', year: ''}
    let [formData, setFormData] = useState(initFormData)

    const initInputStartCheck = {model: false, price: false, year: false};
    const [inputStartCheck, setInputStartChek] = useState(initInputStartCheck);

    const initInputsError = {model:'Заповніть поле модель', price:'Заповніть поле ціна', year:'Заповніть поле рік'};
    let [inputsError, setInputsError] = useState({...initInputsError});

    let [formValid, setFormValid] = useState(false);

    useEffect(()=>{
        if (inputsError.year || inputsError.price || inputsError.model){
            setFormValid(false);
        }else{
            setFormValid(true);
        }
    },[inputsError]);

    const onChangeInput = (e) => {
        let newData = {...formData, [e.target.name]: e.target.value};
        setFormData({...newData});

        validateForm(e);
    }


    const blurHandler = (e) => {
        setInputStartChek({...inputStartCheck, [e.target.name]: true});
    }


    const validateForm = (e) => {
        switch (e.target.name){
            case 'model':

                break;
            case 'year':
                break;
            case 'price':
                break;
        }
    }


    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(initFormData);
    }

    return (
        <div className={'create_car_form'}>
            <div>
                <form className={'car_form'} onSubmit={onSubmitForm}>

                        <div className={'input_box'}>
                            <label htmlFor="{'model'}">Модель: {inputStartCheck.model && (inputsError.model)}</label>
                            <input onBlur={blurHandler} type="text" name={'model'} onChange={onChangeInput}
                                   value={formData.model}/>
                        </div>


                        <div className={'input_box'}>
                            <label htmlFor="{'price'}">Ціна: {inputStartCheck.price && (inputsError.price)}</label>
                            <input onBlur={blurHandler} type="text" name={'price'} onChange={onChangeInput}
                                   value={formData.price}/>
                        </div>


                        <div className={'input_box'}>
                            <label htmlFor="{'year'}">Рік випуску: {inputStartCheck.year && (inputsError.year)}</label>
                           <input onBlur={blurHandler} type="text" name={'year'} onChange={onChangeInput}
                                   value={formData.year} min={1990} max={2021}/>
                        </div>
                    <div>
                        <input disabled={!formValid} type={'submit'} value={'save'}/>
                    </div>
                </form>
            </div>
        </div>
    );

}
