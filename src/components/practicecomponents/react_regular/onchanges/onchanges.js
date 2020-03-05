import React, {Component} from 'react';
class ChangesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {upper: ''}
    }

    onUpperChange = e => {
        this.setState( {upper: e.target.value.toUpperCase()})
    }
    render() {
        return(
            <div>
                <label htmlFor="upper">Upper</label>
                <input
                id="upper"
                value={this.state.upper}
                onChange={this.onUpperChange}
                />
            </div>
        )
    }
}
export default ChangesComponent;