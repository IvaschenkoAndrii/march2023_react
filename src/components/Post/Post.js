function Post (props){

    let {post, details} = props

    return (
        <div>
            {post.id} {post.title}
                <button onClick={()=>details(post.body)}>Detail</button>
        </div>
    )
}

export {Post}
