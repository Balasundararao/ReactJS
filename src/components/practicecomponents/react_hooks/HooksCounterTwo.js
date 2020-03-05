import React, { useState } from 'react'
function HooksCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFive = () => {
        for( let i=0; i<5; i++) {
            setCount( prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            <p>Its a counter from Hooks counter Two........... Counter Value is :: {count}</p>
            <button className="btn btn-green" onClick={() => setCount( prevCount => prevCount+1)}> Increment Counter </button>
            <button className="btn btn-green" onClick={()=>setCount( prevCount => prevCount - 1)}> Decrement Counter </button>
            <button className="btn btn-green" onClick={()=>setCount(initialCount)}> Reset Counter </button>
            <button className="btn btn-green" onClick={incrementFive}> IncrementFive </button>
        </div>
    )
}
export default HooksCounterTwo;