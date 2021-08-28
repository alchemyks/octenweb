export default function Post({item}){
    return(
        <div key={item.id} className={'post_box'}>
            <p><strong>Title: </strong>{item.title}</p>
            <p><strong>Post: </strong>{item.body}</p>

        </div>
    );
}