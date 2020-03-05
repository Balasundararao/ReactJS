import React,{useState} from 'react';

export default function Login({setUser}) {
    const [username, setUsername] = useState('');
    function handleUsername(evt){
        setUsername(evt.target.value)
    }
    return (
        <form onSubmit={e => {e.preventDefault(); setUser(username)}}>
            <label htmlFor="login-username">UserName:</label>
            <input type="text" name="login-username"  id="login-username"  onChange={handleUsername} value={username}/>
            <label htmlFor="login-password">Password:</label>
            <input type="text" name="login-password" id="login-password"/>
            <input type="submit" value="Login" disabled={username.length === 0}/>
        </form>
    )
}
