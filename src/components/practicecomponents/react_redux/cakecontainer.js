import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../../../redux/index';

const CakeContainer = (props) => {
    return (
        <div>
            <p>React Redux using connect....</p>
            <h2>Number of Cakes{props.numOfCakes} </h2>
            <button className="btn btn-blue" onClick={ props.buyCake }>Buy Cake</button>
        </div>
    )
}

// step1 : map state to props 
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// step2: map dispatch to prorps
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//step3: connect these functions....
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);