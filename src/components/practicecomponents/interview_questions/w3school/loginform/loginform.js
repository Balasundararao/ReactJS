import React from 'react';
import './loginform.scss';

const LoginFormComponent = () => {
    return(
        <React.Fragment>
            <form>

            <div class='container_form'>
                <label  for="username"> UserName </label>
                <input type="text" name="username" id="username" placeholder="username" required></input>
                <label  for="password"> Password </label>
                <input type="text" name="password" id="password" placeholder="password" required></input>  
                <button type="submit">Submit..</button>
            </div>
            </form>

        </React.Fragment>
    )
}
export default LoginFormComponent;