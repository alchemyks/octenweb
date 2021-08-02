const userDetails = new URLSearchParams(document.location.search.substr(1));
const wrap = document.getElementsByClassName('wrap')[0];
console.log(JSON.parse(userDetails.get('user')));
