import {useEffect, useState} from "react";
import {getComments} from "../../services/coment.service";
import Comment from "./Comment";

export default function Comments(){
    let [comments, setComments] = useState([]);
    useEffect(()=>{
       getComments().then((value)=>setComments(value));
    }, []);
    return(
        <div>
            {
                comments.map((itemComment)=>{
                   return(
                       <Comment key = {itemComment.id} item = {itemComment}/>
                   );
                })
            }
        </div>
    );
}