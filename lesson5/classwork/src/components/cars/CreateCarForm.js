import {useEffect, useState} from "react";
import './CreateCarForm.css'
import {appendCar} from "../../services/cars.api.services";

export default function CreateCarForm({car}) {

    const initFormData = {model: '', price: '', year: ''}
    let [formData, setFormData] = useState(initFormData)

    const initInputStartCheck = {model: false, price: false, year: false};
    const [inputStartCheck, setInputStartChek] = useState(initInputStartCheck);

    const initInputsError = {model:'Заповніть поле модель', price:'Заповніть поле ціна', year:'Заповніть поле рік'};
    let [inputsError, setInputsError] = useState({...initInputsError});

    let [formValid, setFormValid] = useState(false);

    let [updateCar, setUpdateCar] = useState(car);



    useEffect(()=>{
        if (car === undefined){
            setFormData(initFormData);
        }else{
            setFormData(car);
        }
    }, [car])





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
                const regexpModel = new RegExp('^\\D{1,20}$');
                if (regexpModel.test(e.target.value)){
                    setInputsError({...inputsError, model: ''})
                }else{
                    setInputsError({...inputsError, model: ' only alpha min 1 max 20 characters'})
                }
                break;
            case 'year':
                console.log('validate year')
                const regexpYear = new RegExp('^\\d+$');
                if (regexpYear.test(e.target.value) && +e.target.value >= 1990 && +e.target.value <= 2021){
                    setInputsError({...inputsError, year: ''})
                }else{
                    setInputsError({...inputsError, year: ' min 1990, max current year'})
                }
                break;
            case 'price':
                console.log('validate price')
                if (e.target.value !=='' && +e.target.value+1 && +e.target.value >= 0){
                    setInputsError({...inputsError, price: ''})
                }else{
                    setInputsError({...inputsError, price: ' greater or equal than 0'})
                }
                break;
        }
    }


    const onSubmitForm = (e) => {
        e.preventDefault();
        setFormData(initFormData);
        appendCar(formData).then();
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
