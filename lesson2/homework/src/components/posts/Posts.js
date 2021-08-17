import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "./Post";

export default function Posts(){
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    },[]);
    return(
        <div>
            {
                posts.map((itemPost)=>{
                   return (
                       <Post key={itemPost.id} item={itemPost}/>
                   );
                })
            }
        </div>
    );
}