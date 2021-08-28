import {useEffect, useState} from "react";
import {getComments} from "../../services/placeholder.api.services";
import Comment from "./Comment";

export default function Comments(){
    let [comments, serComments] = useState([]);
    useEffect(()=>{
        getComments().then(value => serComments(value));
    },[]);

    return (
        <div className={'comments_box'}>
            {
                comments.map(user => {
                    return(
                      <Comment item={user}/>
                    );
                })
            }
        </div>
    )
}