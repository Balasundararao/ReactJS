import React, {useState} from 'react';

function HooksCounter() {
    //declare a state variable 
    const [count, setCount] = useState(0);
    return (
        <div  class="lg">
            <p>Its a counter from Hooks.... <button className="btn btn-blue" onClick={  () => setCount( count + 1) }> Increment Counter ..{count}</button></p>
        </div>
    )
}

export default HooksCounter; 

