import {useEffect, useState} from "react";
import {getPosts, getPostsUserId} from "../../services/post.service";
import Post from "./Post";

export default function Posts({userId}){

    let [posts, setPosts] = useState([]);
    useEffect(()=>{
    if (userId === undefined){
        getPosts().then(({data})=>setPosts(data));
    }else{
        getPostsUserId(userId).then(({data}) => {
            setPosts([...data])});
    }
    },[]);
    return(
        <div>
           {
                posts.map(value=>{
                   return(
                        <Post key={value.id} item={value}/>
                   ) ;
                })
            }
        </div>
    );
}