export default function Post({item}){
    return(
     <div className={'post_bloc'}>
         <p><strong>Title: </strong>{item.title}</p>
         <p><strong>Post: </strong>{item.body}</p>
     </div>
    )
}