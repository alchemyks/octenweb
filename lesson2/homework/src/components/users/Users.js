import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "./User";

export default function  Users(){
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value=>setUsers([...value]));
    }, [])
    //let users = [{id:'56', name:'uyuuyuyu'}];
    return(
        <div>
            {
               users.map((userItem)=><User key = {userItem.id} item={userItem}/>)
            }
        </div>
    );
}