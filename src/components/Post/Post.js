function Post ({post}){

    let {id,title} = post

    return (
        <div>
            {id} {title}
        </div>
    )
}

export {Post}
