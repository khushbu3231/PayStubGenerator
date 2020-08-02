import React, { Component } from 'react';
import EmployeeForm from '../Components/EmployeeForm/EmployeeForm';
import DisplayPaySlip from '../Components/DisplayPaySlip/DisplayPaySlip';

class MainPage extends Component {

    state = {
        data: []
    }

    onSubmit = (data) => {
        this.setState({
            data: data
        })
    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-12"><EmployeeForm onSubmit={(data) => this.onSubmit(data)} /></div>
                    <div className="col-6 col-md-6 col-sm-12"><DisplayPaySlip value={this.state.data} /></div>
                </div>
            </div>
        )
    }
}

export default MainPage;