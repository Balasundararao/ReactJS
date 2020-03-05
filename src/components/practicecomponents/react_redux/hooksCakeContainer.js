import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../../../redux/index';

function HooksCakeContainer(){
    const  numOfCakes = useSelector( state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return(
        <div>
            <p> Hooks cake container.....</p>
            <h2>Number of Cakes{numOfCakes} </h2>
            <button  className="btn btn-red" onClick={ () => dispatch(buyCake()) }>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;

