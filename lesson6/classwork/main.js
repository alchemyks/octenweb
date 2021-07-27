/*
1.Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
 */

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        let postsDiv = document.getElementsByClassName('posts')[0];
        for (let post of value) {
            let postDiv = document.createElement("div");
            let h3 = document.createElement('h3');
            h3.textContent = `${post.id} - ${post.title}`;
            postDiv.appendChild(h3);
            let p = document.createElement('p');
            p.textContent = post.body;
            postDiv.appendChild(p);
            let button = document.createElement('button');
            button.textContent = 'Show comments';
            button.onclick = function (){
                let commentsDiv = document.getElementsByClassName('comments');
                for (let commentDiv of commentsDiv) {
                    commentDiv.textContent = '';
                }
                commentsDiv.textContent = '';
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                    .then(response => response.json())
                    .then(value => {
                        let commentDiv = document.getElementsByClassName(`comments${post.id}`)[0];
                        for (let comment of value) {
                            let commentH3 = document.createElement('h3');
                            commentH3.textContent = `${comment.id} - ${comment.name}`;
                            commentDiv.appendChild(commentH3);
                            let commentP = document.createElement('p');
                            commentP.textContent = `${comment.body}`;
                            commentDiv.appendChild(commentP);
                        }
                    });


            }
            postDiv.appendChild(button);
            let commentPlaceDiv = document.createElement('div')
            commentPlaceDiv.setAttribute('class', 'comments');
            commentPlaceDiv.classList.add(`comments${post.id}`)
            let wrapPostComment = document.createElement('div');
            wrapPostComment.setAttribute('class', 'wrap_post_comment');
            wrapPostComment.appendChild(postDiv);
            wrapPostComment.appendChild(commentPlaceDiv);
            postsDiv.appendChild(wrapPostComment);

        }
    });