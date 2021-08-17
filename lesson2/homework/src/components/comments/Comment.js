export default function Comment({item}){
    return(
        <div>
            <h2>Name: {item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Post: {item.body}</p>
        </div>
    );
}