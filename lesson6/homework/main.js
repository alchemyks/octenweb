/*
1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
*/
fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(values =>{
            let postsDiv = document.getElementsByClassName('posts')[0];
            for (const post of values) {
                let postDiv = document.createElement('div');
                let h3 = document.createElement('h3');
                h3.innerText = `${post.id} - ${post.title}`
                postDiv.appendChild(h3);
                let peshka = document.createElement('p');
                peshka.innerText = post.body;
                postDiv.appendChild(peshka);
                postsDiv.appendChild(postDiv);
            }
        });

/*
2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/comments
 */
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(values => {
        let commentsDiv = document.getElementsByClassName('comments')[0];
        for (comment of values){
            let commentDiv = document.createElement('div');
            let h3 = document.createElement('h3');
            h3.innerText = `${comment.id} - ${comment.name}`;
            commentDiv.appendChild(h3);
            let peshka = document.createElement('p');
            peshka.innerText = comment.body;
            commentDiv.appendChild(peshka);
            commentsDiv.appendChild(commentDiv);
        }
    });
