const baseURL = "https://jsonplaceholder.typicode.com/users"

const getUsers = ()=> {
    return (
        fetch(baseURL)
            .then(response => response.json())
    );
}

const getUser = async (id) =>{
    let user = await  fetch(baseURL + "/"+ id)
        .then(value =>value.json());
    return user;
}

export {getUsers, getUser}