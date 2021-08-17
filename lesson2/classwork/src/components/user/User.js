import Posts from "../post/Posts";

export default function User({item}){
    return(
        <div>
            <h3>{item.id} - {item.username}</h3>
            <h4>Username: {item.username}</h4>
            <h5>Email: {item.email}</h5>
            <Posts userId={item.id}/>
        </div>
    )
}