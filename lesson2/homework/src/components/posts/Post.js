export default function Post({item}){
    return(
        <div>
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong> Post:</strong> {item.body}</p>
        </div>
    );
}