/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/users
кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
 */

function createTagText(tag, text = '') {
    let element = document.createElement(tag);
    element.textContent = text;
    return element;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (let user of value) {
            let userDiv = createTagText('div');
            userDiv.appendChild(createTagText('h3', `${user.id} - ${user.username}`));
            userDiv.appendChild(createTagText('p', `Name: ${user.name} `));
            userDiv.appendChild(createTagText('p', `Email: ${user.email}`))
            let userDataDiv = createTagText('div');
            userDataDiv.setAttribute('class', 'user_data');
            let postDiv = createTagText('div');
            postDiv.setAttribute('class', 'posts');
            postDiv.classList.add(`user${user.id}`);
            let commentsDiv = createTagText('div');
            commentsDiv.setAttribute('class', 'comments');
            postDiv.appendChild(commentsDiv);
            let buttonPosts = createTagText('button', 'Get posts');
            buttonPosts.onclick = function () {
                let allDivPosts = document.getElementsByClassName('posts');
                for (const allDivPost of allDivPosts) {
                    allDivPost.innerHTML = '';
                }
                let postElement = document.getElementsByClassName(`user${user.id}`)[0];
                postElement.innerHTML = 'Loading!!!';
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                    .then(response => response.json()
                        .then(value => {
                            postElement.innerHTML = '';
                            for (const post of value) {
                                let userPostId = createTagText('div');
                                userPostId.setAttribute('class', `post${post.id}`)
                                userPostId.appendChild(createTagText('h5', post.title));
                                userPostId.appendChild(createTagText('p', post.body));
                                let buttonComments = createTagText('button', 'Get comments');
                                userPostId.appendChild(buttonComments);
                                buttonComments.onclick = function () {
                                    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                        .then(response => response.json())
                                        .then(value => {
                                            for (const comments of value) {
                                                let commentsChild = createTagText('div');
                                                commentsChild.setAttribute('class', 'comments');
                                                commentsChild.appendChild(createTagText('h5', `Name: ${comments.name}`));
                                                commentsChild.appendChild(createTagText('h6', `Email: ${comments.email}`));
                                                commentsChild.appendChild(createTagText('p', comments.body));
                                                console.log(commentsDiv);
                                                userPostId.appendChild(commentsChild);
                                            }
                                        })
                                }
                                postElement.appendChild(userPostId);
                            }
                        }))
            }

            userDiv.appendChild(buttonPosts);
            userDataDiv.appendChild(userDiv);
            userDataDiv.appendChild(postDiv);

            const wrap = document.getElementsByClassName('wrap')[0];
            wrap.append(userDataDiv);
        }
    });