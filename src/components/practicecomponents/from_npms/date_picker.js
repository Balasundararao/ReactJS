import React,{Component} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
class  BDatePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
        };
    } // end constructor 

    handleChange = date => {
        this.setState({ startDate: date});
    };
    
    render(){
        return (
            <DatePicker 
             selected={this.state.startDate}
             onChange={this.handleChange}
             placeholderText="MM/DD/YYYY"
            />
        );
    }
}

export default BDatePicker; 