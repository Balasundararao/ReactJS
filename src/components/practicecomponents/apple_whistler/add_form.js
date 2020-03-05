import React from 'react';
const AddForm = () => {
    return(
        <form name="my-form" action="#" method="get">
            <fieldset>
            <legend>User Details:</legend>
                <div class="form-box">
                    <label for="username">UserName</label>
                    <input type="text" id="username" name="username" placeholder="username"></input>
                </div>
                <div class="form-box">
                    <label for="password">Password</label>
                    <input type="text" id="password" name="password" placeholder="password"></input>
                </div>
                <br/>
                <div class="form-box">
                    <button id="btnSave">Save</button>
                </div>
            </fieldset>
        </form>
    )
}
export default AddForm;