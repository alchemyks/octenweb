import './Post.css';
import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import Post from "./Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    }, []);

    let [post, setPost] = useState(null);
    const showDetailPost = (value) => {
        setPost(value);
    };
    return (
        <div className={'posts_box'}>

            {
                posts.map((value) => {
                    return (
                        <div className={'wrap'}>
                            <div>
                                <Post key={value.id} item={value} showDetailPost={showDetailPost}/>
                            </div>

                            {(post && value.id === post.id) && (<div className={'post_detail_box'}>
                                <p><strong>UserID: </strong>{post.userId}</p>
                                <p><strong>PostId: </strong>{post.id}</p>
                                <p><strong>Title: </strong>{post.title}</p>
                            </div>)
                            }

                        </div>
                    );
                })
            }



        </div>
    );
}