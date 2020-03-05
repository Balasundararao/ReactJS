import React, {useReducer} from 'react'
const initialState = 0; 
const c1reducer = ( state, action ) => {
    switch( action) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET' :
            return initialState
        default:
            return initialState
    }
}
const Counter1UseRed = () => {
    const [c1counter, dispatch] = useReducer( c1reducer, initialState );
    return(
        <div>
            <p>Its a Counter Using Use Reducer, and Counter Values is {c1counter}..</p>
            <button onClick={ () => dispatch('INCREMENT') }>Increment</button>
            <button onClick={ () => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={ () => dispatch('RESET')}>Reset</button>
        </div>
    )
}
export default Counter1UseRed