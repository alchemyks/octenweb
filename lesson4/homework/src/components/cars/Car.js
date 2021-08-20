import './Car.css'

export default function Car({item}) {
    return (
        <div className={'car_box'}>
            <p><strong>Model: </strong>{item.model}.<strong> Year of manufactured: </strong>{item.year}.<strong> Price: </strong>{item.price}.</p>
        </div>
    )
}