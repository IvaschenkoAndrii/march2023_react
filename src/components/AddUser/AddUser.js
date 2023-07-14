import {useRef} from "react";

function AddUser({setUsers}) {



    const name = useRef('')
    const username = useRef('')
    const email = useRef('')



    const handlesubmit = (event) => {
        event.preventDefault();
        let user = {
            name: name.current.value,
            username: username.current.value,
            email: email.current.value
        }
        console.log(user);
        console.log(setUsers);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        setUsers(users => [...users, user]);
    }

    return (
        <div>
            <form onSubmit={handlesubmit} autoComplete={'off'}>
                <label>
                    <br/>
                    <input type="text" placeholder={'Name'} ref={name}/>
                </label>
                <label>
                    <br/>
                    <input type="username" placeholder={'username'} ref={username}/>
                </label>
                <label>
                    <br/>
                    <input type="text" placeholder={'email'} ref={email}/>
                </label>
                <br/>
                <button type='submit'>Send</button>
            </form>
            <hr/>
        </div>
    )
}

export {AddUser}
