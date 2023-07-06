import {useEffect, useState} from "react";

import {Post} from "../Post/Post";


function Posts (){

    const [posts, setPosts] = useState([]);
    const [postDetail, setPostDetail] = useState(null)


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])


    function details (body)  {
        setPostDetail(body);
     }

    return (
        <div>
            <h2>{postDetail}</h2>
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
