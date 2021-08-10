export default function Simpson({name,surname,age,info,photo}){
    return(
        <div className={'Simpson'}>
            <img src={photo}  alt="{name}photo"/>
            <h2>Name - {name}</h2>
            <h3>Surname - {surname}</h3>
            <h4>Age - {age}</h4>
            <p>{info}</p>
        </div>
    );
}