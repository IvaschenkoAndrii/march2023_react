function User({user}) {

    const {name, username, email} = user;

    return (
        <div>
            name - {name}
            <br/>
            username - {username}
            <br/>
            email - {email}
        </div>
    )
}

export {User}
