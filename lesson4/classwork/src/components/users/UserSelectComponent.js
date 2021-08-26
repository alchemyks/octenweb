import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";
import './UseSelectComponent.css'

export default function UserSelectComponent({setUserId}){
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value=>setUsers([...value]));
    },[]);

    return(
        <div className={'user_select_component'}>
            <select onChange={(e)=>setUserId(e.target.value)}>
                <option  value={undefined}></option>
            {
                users.map((user)=>{
                    return(
                      <option key={user.id} value={user.id}>{user.id} - {user.name}</option>
                    );
                })
            }
            </select>
        </div>
    );
}