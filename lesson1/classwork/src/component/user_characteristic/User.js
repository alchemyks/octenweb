import Address from "./Address"
import './User.css'
export default function User({name, username, email, address, }){
    return(
        <div className={'user'}>
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <Address street={address.street} suite={address.suite} city={address.city} zipcode={address.zipcode} geo={address.geo}/>
        </div>
    );
}