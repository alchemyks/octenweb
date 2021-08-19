export default function Post({item, showDetailPost}){
    return(
     <div className={'post_box'}>
              <p><strong>Post: </strong>{item.body}</p>
         <button onClick = {()=>{
             showDetailPost(item)}}>ShowPostDetail</button>
     </div>
    )
}