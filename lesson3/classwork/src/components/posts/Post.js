export default function Post({item, showDetailPost}){
    return(
     <div className={'post_box'}>
              <p><strong>Post: </strong>{item.body}</p>
         <button onClick = {()=>{
             console.log('click');
             showDetailPost(item)}}>ShowPostDetail</button>
     </div>
    )
}