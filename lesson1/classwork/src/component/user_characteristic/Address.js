import Geo from "./Geo"

export default function Address({street, suite, city, zipcode, geo}){
    return(
        <div className={'address'}>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipcode}</p>
            <Geo lat={geo.lat} lng={geo.lng}/>
        </div>
    );
}