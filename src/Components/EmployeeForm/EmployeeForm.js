import React, { Component } from 'react';
import './employeeForm.css';

class EmployeeForm extends Component {

    state = {
        eNo: "",
        eName: "",
        eNameError: "",
        gender: "",
        department: "",
        vehicle: "false",
        basicSalary: 0,
        DA: 0,
        HRA: 0,
        PF: 0
    }

    generateSlip = (e) => {
        this.props.onSubmit(this.state);
        // console.log(this.state)
    }
    eNameValidator() {
        if (this.state.eName ==="") {
            this.setState({
                eNameError: "Employee Name is required."
            })
        }
        else {
            this.setState({
                eNameError: " "
            })
        }
    }



    onInputChange = (e) => {

        if (e.target.name === 'vehicle') {

            e.target.value = e.target.checked
        }
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="formContainer">
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Employee No:</label>
                        <div className="col-sm-6">
                            <input type="text" name="eNo" className="form-control" id="inputENo" placeholder="Employee Id" onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Employee Name:</label>
                        <div className="col-sm-6">
                            <input type="text" name="eName" className="form-control" id="inputEName" placeholder="Employee Name" onBlur={() => this.eNameValidator()} onChange={this.onInputChange} />
                            <label style={{ color: 'red' }}>{this.state.eNameError}</label>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Gender:</label>
                        <div className="col-sm-6">
                            <div className="col-sm-2 ">
                                <input className="form-check-input vehicleCheckbox" type="radio" name="gender" value="male" onChange={this.onInputChange} /> Male
                            </div>
                            <div className="col-sm-2 ">
                                <input className="form-check-input vehicleCheckbox" type="radio" name="gender" value="female" onChange={this.onInputChange} />Female
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Department:</label>
                        <div className="col-sm-2">
                            <select className="my-1 mr-sm-2" name="department" onChange={this.onInputChange} >
                                <option>Select</option>
                                <option value="IT">IT</option>
                                <option value="Account">Account</option>
                                <option value="Supply Chain">Supply Chain</option>
                                <option value="Help Desk">Help Desk</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Owns Vehicle:</label>
                        <div className="col-sm-6">
                            <input className="form-check vehicleCheckbox" type="checkbox" name="vehicle" onChange={this.onInputChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Basic Salary:</label>
                        <div className="col-sm-6">
                            <input type="text" name="basicSalary" className="form-control" placeholder="Basic Salary" onChange={this.onInputChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">DA in % :</label>
                        <div className="col-sm-6">
                            <input type="text" name="DA" className="form-control" placeholder="DA in % :" onChange={this.onInputChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">HRA in % :</label>
                        <div className="col-sm-6">
                            <input type="text" name="HRA" className="form-control" placeholder="HRA in % :" onChange={this.onInputChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">PF in %</label>
                        <div className="col-sm-6">
                            <input type="text" name="PF" className="form-control" placeholder="PF in %:" onChange={this.onInputChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button onClick={this.generateSlip} className="btn btn-primary"> Generate Slip</button>
                        </div>
                    </div>

                </div>

            </div>


        )
    }
}

export default EmployeeForm