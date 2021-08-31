import {useEffect, useState} from "react";
import {getUsers} from "../../services/jsonplaceholder.api.services";
import User from "./User";

export default function Users(){
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]));
    },[]);
    return(
        <div className={'users_box'}>
            {
                users.map(user=>{
                    return(
                        <User key={user.id} item={user}/>
                    );
                })
            }
        </div>
    )
}