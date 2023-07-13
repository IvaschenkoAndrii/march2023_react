function User({user,setUsers}) {

    const {name, username, email} = user;
    console.log(setUsers);

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
