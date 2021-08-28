import {useEffect, useState} from "react";
import {getPosts} from "../../services/placeholder.api.services";
import Post from "./Post";

export default function Posts(){
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts(value));
    },[]);
    return(
        <div className={'posts_box'}>
            {
                posts.map(value => {
                    return(
                        <Post item={value}/>
                    )
                })
            }
        </div>
    );
}