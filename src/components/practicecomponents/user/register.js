import React,{useState} from 'react';
export default function Register({setUser}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    function handleUserName(evt) {
        setUserName(evt.target.value);
    }
    function handlePassword(evt) {
        setPassword(evt.target.value);
    }
    function handlePasswordRepeat(evt) {
        setPasswordRepeat(evt.target.value);
    }

    return (
        <form onSubmit = {e => { e.preventDefault(); setUser(username) }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username" onChange={handleUserName} value={username}/>
            <label htmlFor="register-password">Password:</label>
            <input type="text" name="register-password" id="register-password" onChange={handlePassword} value={password}/>
            <label htmlFor="register-password-repeat">Repeat Password:</label>
            <input type="text" name="register-password-repeat" id="regsiter-password-repeat" onChange={handlePasswordRepeat} value={passwordRepeat}/>
            <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat }/>
        </form>
    )
}