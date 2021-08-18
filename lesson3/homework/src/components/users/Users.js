import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import User from "./User";
import Posts from "../posts/Posts";
export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);

    let [userId, setId] = useState(null);
    const viewUserPostsById = (userId)=> setId(userId);
    return (
        <div className={'wrap'}>

            <div className={'users_box'}>
                {
                    users.map(user => {
                        return (
                            <User key={user.id} item={user} viewUserPosts={viewUserPostsById}/>
                    )
                    })
                }
            </div>
            {userId && (<div className={'user_posts_box'}>
                <Posts  userId={userId}/>
                {console.log(userId)}
            </div>)}
        </div>

    );
}