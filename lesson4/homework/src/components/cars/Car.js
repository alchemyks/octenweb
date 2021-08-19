import './Car.css'

export default function Car({item}) {
    return (
        <div className={'car_box'}>
            <h3><strong>Model: </strong>{item.model}</h3>
            <h4><strong>Year of manufactured: </strong>{item.year}</h4>
            <h4><strong>Price: </strong>{item.price}</h4>
        </div>
    );
}