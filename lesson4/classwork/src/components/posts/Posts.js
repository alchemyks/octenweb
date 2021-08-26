import {useEffect, useState} from "react";
import {getPostsByUser} from "../../services/posts.services";
import Post from "./Post";

export default function Posts({userId}){
    let [posts, setPost] = useState([]);
    useEffect(()=>{
        console.log(userId)
        if (userId) {
            getPostsByUser(userId).then(({data}) => setPost([...data]));
        }
    },[userId]);
    return(
        <div className={'posts_box'}>
            {
                posts.map(post=>{
                    return(
                   <Post  post={post}/>
                    )
                })
            }
        </div>
    );
}