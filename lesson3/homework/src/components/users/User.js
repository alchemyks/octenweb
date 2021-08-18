export default function User({item, viewUserPosts}){
    return(
        <div className={'user_box'}>
            <h2>{item.id} - {item.username}</h2>
            <button onClick = {()=>viewUserPosts(item.id)}>ShowUserPosts</button>
        </div>
    );
}