

fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(value => {
        const wrapBlock  = document.getElementsByClassName('wrap')[0];
        for (const user of value) {
            let userBlock = document.createElement('div');
            userBlock.setAttribute('class', 'user_block');
            userBlock.innerHTML = `<h3>${user.id} - ${user.name}</h3>`;
            let hrefUser = document.createElement('a');
            hrefUser.setAttribute('href', `user-details.html?user=${JSON.stringify(user)}`);
            hrefUser.textContent = 'Detail';
            userBlock.appendChild(hrefUser);
            wrapBlock.appendChild(userBlock);
        }
    })