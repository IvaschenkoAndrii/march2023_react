import {useEffect, useState} from "react";
import {User} from "../User/User";

function Users (){

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => console.log(value))
    },[])



    return (
        <div>
            {users?.map((user,id)=><User key={id} user={user}/>)}
        </div>
    )
}

export {Users}
