import './Comment.css'

export default function Comment({item}){
    return(
        <div className={'Comment'}>
            <p><strong>Name: </strong>{item.name}</p>
            <p><strong>Email: </strong>{item.email}</p>
            <p><strong>Comment: </strong>{item.body}</p>
        </div>
    );
}