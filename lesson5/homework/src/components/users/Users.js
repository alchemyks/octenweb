import {useEffect, useState} from "react";
import {getUsers} from "../../services/placeholder.api.services";
import User from "./User";

export default function Users(){
    let [users, serUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => serUsers(value));
    },[]);

    return (
        <div className={'comments_box'}>
            {
                users.map(user => {
                    return(
                        <User item={user}/>
                    );
                })
            }
        </div>
    )
}