
function createTagText(tag_name, text=''){
    let tag = document.createElement(tag_name);
    tag.innerText = text;
    return tag;
}

const url = new URL(document.location)
const postDetailData = JSON.parse(url.searchParams.get('post_detail'));
const wrap = document.getElementsByClassName('wrap')[0];
const postDetailDiv = document.createElement('div');
postDetailDiv.setAttribute('class', 'post_detail');
postDetailDiv.appendChild(createTagText('p', `UserId: ${postDetailData.userId}`));
postDetailDiv.appendChild(createTagText('p', `Id: ${postDetailData.id}`));
postDetailDiv.appendChild(createTagText('p', `Title: ${postDetailData.title}`));
postDetailDiv.appendChild(createTagText('p', `Body: ${postDetailData.body}`));
fetch(`https://jsonplaceholder.typicode.com/posts/${postDetailData.id}/comments`)
    .then(response=>response.json())
    .then(value => {
        const allCommentsDiv = document.createElement('div');
        allCommentsDiv.setAttribute('class', 'all_comments');
        for (const post of value) {

        }
    })
wrap.appendChild(postDetailDiv);
console.log(postDetailData)