import './Post.css'

export default function Post({post}){
    return(
        <div key={post.id} className={'post_box'}>
            <p><strong>Title: </strong>{post.title}</p>
            <p><strong>Post: </strong>{post.body}</p>
        </div>
    );
}