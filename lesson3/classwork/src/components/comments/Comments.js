import './Comment.css'
import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.service";
import Comment from "./Comment";

export default function Comments(){
    let [comments, setComments] = useState([]);
    useEffect(()=>{
        getComments().then(value => setComments(value));
    },[])

    let [commentId, setCommentId] = useState(null);

    const showCommentDetail = (id)=>setCommentId(id);

    return(
        <div className={'comments_box'}>
            {
                comments.map(value => {
                    return(
                        <div className={'wrap'}>
                            <Comment key={value.id} item={value} showCommentDetail={showCommentDetail}/>
                            {
                                (commentId && value.id === commentId) && (
                                    <div className={'comment_detail_box'}>
                                        <p><strong>CommentId: </strong>{value.postId}</p>
                                        <p><strong>Id: </strong>{value.id}</p>
                                        <p><strong>Name: </strong>{value.name}</p>
                                        <p><strong>Email: </strong>{value.email}</p>
                                    </div>
                                )
                            }
                        </div>


                    );
                })
            }
        </div>
    );
}