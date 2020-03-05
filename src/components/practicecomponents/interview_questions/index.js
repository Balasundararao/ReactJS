import React from 'react';
// Interview Questions....
import MerkariComponent from './merkari/index';
import LoginFormComponent  from './w3school/loginform/loginform.js';
import FlagPickerHooksMain  from './HCL/hooksbase/index.js';

const InterviewsMain = () => {
    return (
            <React.Fragment>
                <div className=""><LoginFormComponent/></div>
                <br/><br/><br/>
                <div className=""><MerkariComponent/></div>
                <br/><br/><br/>
                <FlagPickerHooksMain/>
            </React.Fragment>


    )
}
export default InterviewsMain;