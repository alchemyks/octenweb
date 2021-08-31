import {useHistory} from "react-router";

export default function User({item}){
    let history = useHistory();
    const navigate = ()=>{
        history.push('/users/'+item.id, item);
    };
    return(
        <div className={'user_box'}>
            <h3>{item.id} - {item.name}</h3><button onClick={navigate}>UserDetail</button>
        </div>
    )
}