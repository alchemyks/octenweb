export default function Comment({item, showCommentDetail}){
    return(
        <div className={'comment_box'}>
            <p><strong>Comment: </strong>{item.body}</p>
            <button onClick={()=>showCommentDetail(item.id)} >ShowDetail</button>
        </div>
    );
}