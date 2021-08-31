import {useEffect, useState} from "react";
import {getUserById} from "../../services/jsonplaceholder.api.services";

export default function UserDetails({match:{params:{id}}}){

    let [userDetail, setUserDetail] = useState({});
    useEffect(()=>{
        getUserById(id).then(value => {
            setUserDetail(value)});
    },[id]);
    return(
        <div className={'user_details_box'}>

            <p><strong>Name: </strong>{userDetail.name}</p>
            <p><strong>Email: </strong>{userDetail.email}</p>
            <p><strong>Company: </strong>{userDetail.company.name}</p>
            <p><strong>City: </strong>{userDetail.address.city}</p>
            <p><strong>Phone: </strong>{userDetail.phone}</p>
            <p><strong>Website: </strong>{userDetail.website}</p>
        </div>
    )
}