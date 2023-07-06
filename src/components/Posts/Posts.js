import {useEffect, useState} from "react";

import {Post} from "../Post/Post";


function Posts (){

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])


    function details (body)  {
        alert(body);
     }

    return (
        <div>
            {posts.map((post,id)=>
                <Post
                    key={id}
                    post={post}
                    details={details}
                />)}

        </div>
    )
}


export {Posts}
