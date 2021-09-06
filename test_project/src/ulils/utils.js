const getRandomGenre = (genres)=>{
    return genres[Math.floor((Math.random()*genres.length))]
}

export {getRandomGenre}