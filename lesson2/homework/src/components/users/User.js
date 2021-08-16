export default function User({item}){
   return(
        <div>
            <h2>{item.id} - {item.username}</h2>
            <p>Email: {item.email}</p>
        </div>
    );
}