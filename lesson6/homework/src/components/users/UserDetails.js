import {useEffect, useState} from "react";
import {getUserById} from "../../services/jsonplaceholder.api.services";

export default function UserDetails({match:{params:{id}}}){

    let [userDetail, setUserDetail] = useState(undefined);
    useEffect(() => {
        async function fetchData(){
            let response = await  getUserById(id);
            await setUserDetail({...response});
        }
        fetchData()

    },[id]);
    return(
        <div className={'user_details_box'}>
            { userDetail && (<div>
            <p><strong>Name: </strong>{userDetail.name}</p>
            <p><strong>Email: </strong>{userDetail.email}</p>
            <p><strong>Company: </strong>{userDetail.company.name}</p>
            <p><strong>City: </strong>{userDetail.address.city}</p>
            <p><strong>Phone: </strong>{userDetail.phone}</p>
            <p><strong>Website: </strong>{userDetail.website}</p> </div>)}
        </div>
    )
}