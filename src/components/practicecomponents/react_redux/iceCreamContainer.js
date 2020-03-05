import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../../../redux/index';

function IceCreamContainer(props){
    return(
        <div>
            <div>IceCream Container</div>
            <h2> Number of Ice Creams:{props.numOfIceCreams}</h2>
            <button className="btn btn-green" onClick={ props.buyIceCream }>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToPros = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(IceCreamContainer)