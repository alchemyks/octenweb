import {useEffect, useState} from "react";
import {getUsers} from "../../services/jsonplaceholder.api.services";
import User from "./User";
import UserDetails from "./UserDetails";
import {Route} from "react-router-dom";

export default function Users(props){
    let {match: {url}} = props;
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
            <Route path={`${url}/:id`} render={(props)=>{return <UserDetails {...props}/>}}/>

        </div>
    )
}