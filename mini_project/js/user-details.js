const userDetails = new URLSearchParams(document.location.search.substr(1));
const wrap = document.getElementsByClassName('wrap')[0];
const user = JSON.parse(userDetails.get('user'));
let userInfoDiv = document.createElement('div');
wrap.appendChild(userInfoDiv);
userInfoDiv.setAttribute('class', 'user_info');
userInfoDiv.innerHTML = `<div>
                            <p><em>User:</em></p>
                            <p><strong>${user.id} - ${user.name}</strong></p>
                            <p>Username: ${user.username}</p>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                            <p>Website: ${user.website}</p>
                        </div>
                        <div>
                            <p><em>Address:</em></p>
                            <p>Street: ${user.address.street}</p>
                            <p>Suite: ${user.address.suite}</p>
                            <p>Sity: ${user.address.city}</p>
                            <p>Zipcode: ${user.address.zipcode}</p>
                            <p>Lat: ${user.address.geo.lat}</p>
                            <p>Lng: ${user.address.geo.lng}</p>
                        </div>
                        <div>
                            <p><em>Company:</em></p>
                            <p>Company name: ${user.company.name}</p>
                            <p>Company catchphrase: ${user.company.catchPhrase}</p>
                            <p>BS: ${user.company.bs}</p>
                        </div>`

const buttonGetPost = document.createElement('button');
buttonGetPost.textContent = "post of current user";
buttonGetPost.setAttribute('class','button_post_user');
buttonGetPost.onclick = (()=>{
    fetch(` https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response=>response.json())
        .then(value => {
            const postHolder = document.createElement('div');
            postHolder.setAttribute('class', 'post_holder');
            for (const post of value) {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `<p>${post.title}</p>`
                const buttonDetailPost = document.createElement('button');
                buttonDetailPost.textContent = 'Post detail';
                buttonDetailPost.setAttribute('onclick', `window.location='post-details.html?post_detail=${JSON.stringify(post)}'`)
                postDiv.appendChild(buttonDetailPost);
                postHolder.appendChild(postDiv);
            }
            wrap.appendChild(postHolder);
        })
})
wrap.appendChild(buttonGetPost);

