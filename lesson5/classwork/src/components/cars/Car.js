export default function Car({item}){
    return(
        <div  className={'car_box'}>
            <p>
                <strong>Model: </strong>{item.model}
                <strong>Price: </strong>{item.price}
                <strong>Year: </strong>{item.year}
            </p>
        </div>
    )
}