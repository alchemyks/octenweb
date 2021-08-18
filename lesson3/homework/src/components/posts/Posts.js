import {useEffect, useState} from "react";
import {getPosts, getPostsByUserId} from "../../services/posts.service";
import Post from "./Post";

export default function Posts({userId}){
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        if (userId ===undefined){
            getPosts().then(({data})=>setPosts(data));
        }else{
            getPostsByUserId(userId).then(({data})=>setPosts(data));
        }
    },[userId]);
    return(
        <div className={'posts_bloc'}>
            {
                posts.map((value) => {
                    return(
                        <Post key={value.id} item={value}/>
                    );
                })
            }
        </div>
    );
}