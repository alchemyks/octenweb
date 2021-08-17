const baseURL = "https://jsonplaceholder.typicode.com/comments";

const getComments = ()=>{
    return(
        fetch(baseURL).then(value => value.json())
    );
};

const getComment = (id)=>fetch(baseURL+'/'+id).then(value => value.json());

export {getComments, getComment};