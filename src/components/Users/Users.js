import React, {useEffect, useState} from "react";
import {User} from "../User/User";
import {AddUser} from "../AddUser/AddUser";

function Users (){

    const [users, setUsers] = useState([]);

    console.log(setUsers);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users=>users.json())
            .then(users=>setUsers(users))
    },[])

    return (
        <div>
            <AddUser setUsers={setUsers}/>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    )
}

export {Users}
