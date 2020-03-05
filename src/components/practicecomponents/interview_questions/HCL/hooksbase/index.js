import React from 'react';
import flags from '../../HCL/contents.json'

const continents = flags.map(  val => `<li>${val.continent}</li>`  );


const FlagPickerHooksMain  = () =>{
    return(
        <React.Fragment>
            <div>
                <h3>Flag Picker</h3>
                <p> This app will help you to learn flags around the world in 3 Steps</p>
                <div className="stepper">
                    <div className="step1">
                        <input type="text" name="step1_input" id="step1_input"></input>
                        <ul>
                        {continents}
                        </ul>
                    </div>
                    <div className="step2"></div>
                    <div className="step3"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FlagPickerHooksMain;
