function User (props){

    const {user, showPosts} = props;

    return (
        <div>
            {user.name} {user.username} {user.email}
            <button  onClick={()=>showPosts(user.id)}>Show Posts</button>
        </div>
    )
}

export {User}
