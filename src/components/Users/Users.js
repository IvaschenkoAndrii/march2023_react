import {useEffect, useState} from "react";
import {User} from "../User/User";

function Users() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => setUsers(users))
    },[])


    function showPosts (id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(posts => setPosts(posts))
    }


    return (
        <div>
            <h3>{posts.map(post=><div>{post.body}</div>)}</h3>
            {users?.map((user, id) => <User key={id} user={user} showPosts={showPosts}/>)}
        </div>
    )
}

export {Users}
