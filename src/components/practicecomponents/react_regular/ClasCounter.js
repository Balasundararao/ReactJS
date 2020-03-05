import React, {Component} from 'react';

class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    counterHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <p>Its a Class Counter Component::  <button onClick={this.counterHandler}>Increment Counter.  {this.state.count} </button> </p>
            </div>
        )
    }
}
export default ClassCounter;

