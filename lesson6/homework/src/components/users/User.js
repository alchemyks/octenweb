export default function User({item}){
    return(
        <div className={'user_box'}>
            <h3>{item.id} - {item.name}</h3>
        </div>
    )
}