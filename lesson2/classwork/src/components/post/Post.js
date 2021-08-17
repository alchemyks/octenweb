import './Post.css'
import Comments from "../comment/Comments";
export default function Post({item}){
    return(
        <div className={'Post'}>
            <p><strong>Title: </strong>{item.title}</p>
            <p><strong>Post: </strong>{item.body}</p>
            <Comments postId={item.id}/>
        </div>
    );
}