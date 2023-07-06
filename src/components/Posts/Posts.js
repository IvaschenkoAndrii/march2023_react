import {useEffect, useState} from "react";

import {Post} from "../Post/Post";

function Posts (){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])

    console.log(posts);

    return (
        <div>
            {posts.map((post,id)=>
                <Post
                    key={id}
                    post={post}/>)}
        </div>
    )
}
//
//     return (
//         <>
//
//             {posts.map((post, id) => {
//                 return (
//                     <Post
//                         key={id}
//                         title={post.title}
//
//                     />);
//             })}
//         </>);
// };

export {Posts}
