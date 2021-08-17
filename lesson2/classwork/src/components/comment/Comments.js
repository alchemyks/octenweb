import {useEffect, useState} from "react";
import {getCommentByPostId} from "../../services/comment.service";
import Comment from "./Comment";
export default function Comments({postId}){
    let [comments, setComments] = useState([]);
    useEffect(()=>{
        getCommentByPostId(postId).then(({data}) => setComments(data));
    },[]);
    return(
        <div>
            {
                comments.map(itemPost=>{
                    return(
                        <Comment key={itemPost.id} item={itemPost}/>
                    );
                })
            }
        </div>
    );
}