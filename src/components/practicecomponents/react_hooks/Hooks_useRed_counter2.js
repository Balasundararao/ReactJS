import React, {useReducer} from 'react'
const initialState = {
    counterValue: 0
}
const c2Reducer = ( state, action  ) => {
    switch( action.type ) {
        case "INCREMENT" :
            return {counterValue:  state.counterValue + 1 }
        case "DECREMENT" :
            return {counterValue: state.counterValue - 1}
        case "RESET" :
            return initialState
        default :
            return state
    }
}

const Counter2UseRed = () => {
    const [c2counter, dispatch] = useReducer(c2Reducer, initialState)
    return(
        <div>
            <p>useReducer Counter2, and the counter Value is :: {c2counter.counterValue}</p>
            <button onClick={ () => dispatch({type: 'INCREMENT'}) }>Increment</button>
            <button onClick={ () => dispatch({type: 'DECREMENT'})}>Decrement</button>
            <button onClick={ () => dispatch({type:'RESET'})}>Reset</button>
            
        </div>
    )
}
export default Counter2UseRed;