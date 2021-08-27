import {useEffect, useState} from "react";
import {getPostsByUser} from "../../services/posts.services";
import Post from "./Post";
import './Posts.css'

export default function Posts({userId}){
    let [posts, setPost] = useState([]);
    useEffect(()=>{
        if (userId) {
            getPostsByUser(userId).then(({data}) => setPost([...data]));
        }else {
            setPost([]);
        }
    },[userId]);
    return(
        <div className={'posts_box'}>
            {
                posts.map(post=>{
                    return(
                   <Post   post={post}/>
                    )
                })
            }
        </div>
    );
}