import './Car.css'

export default function Car({item, setFormData}) {

    return (
        <div className={'car_box'}>
            <p><strong>Model: </strong>{item.model}.<strong> Year of manufactured: </strong>{item.year}.<strong> Price: </strong>{item.price}.</p>
            <input type={'button'} value={'Delete'}/>
            <input type={'button'} value={'Edit'} onClick={()=>{
                setFormData(item)}}/>
        </div>
    )
}