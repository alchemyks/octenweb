export default function User({item}){
    return(
        <div key={item.id} className={'user_box'}>
            <h3>{item.id} - {item.name}</h3>
        </div>
    );
}