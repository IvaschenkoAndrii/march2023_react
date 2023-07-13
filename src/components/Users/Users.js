import React, {useEffect, useState} from "react";
import {User} from "../User/User";

function Users (){

    const [users, setUsers] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users=>users.json())
            .then(users=>setUsers(users))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setUsers={setUsers}/>)}
        </div>
    )
}

export {Users}
