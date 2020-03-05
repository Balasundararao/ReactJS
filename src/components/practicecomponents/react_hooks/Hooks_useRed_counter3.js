import React, {useReducer} from 'react';

const initialState = 0;
const c3Reducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1;
        case "DECREMENT":
            return  state - 1;
        case "RESET":
            return initialState;
        default: 
            return state;
    }
}
const Counter3UseRed = () => {    
    const [c3counter, dispatch] = useReducer(c3Reducer, initialState)
    const [c4counter, dispatch2] = useReducer(c3Reducer, initialState)
    return ( 
       <div>
            <div>
                Use Reducer Counter3 and Counter3 Value is :: {c3counter} <br/>
                Use Reducer Counter3 and Counter4 Value is :: {c4counter}
            </div>
            <button onClick={ () => dispatch('INCREMENT')}>Increment Counter1</button>
            <button onClick={ () => dispatch('DECREMENT')}>Decrement Counter1</button>
            <button onClick={ () => dispatch('RESET')}>Reset Counter1</button>
            
            <br/>

            <button onClick={ () => dispatch2('INCREMENT')}>Increment Counter2</button>
            <button onClick={ () => dispatch2('DECREMENT')}>Decrement Counter2</button>
            <button onClick={ () => dispatch2('RESET')}>Reset Counter2</button>
            
        </div> 
    )

} 
export default Counter3UseRed; 