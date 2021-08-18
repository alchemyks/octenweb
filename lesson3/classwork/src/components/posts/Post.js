export default function Post({item, showDetailPost}){
    return(
     <div>
              <p><strong>Post: </strong>{item.body}</p>
         <button onClick = {()=>{
             showDetailPost(item)}}>ShowPostDetail</button>
     </div>
    )
}