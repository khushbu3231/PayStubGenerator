import React from 'react';
import './displayPaySlip.css'

const DisplayPaySlip = (props) => {
    let { eNo, eName, gender, department, vehicle = " ", basicSalary = 0, DA =0, HRA = 0, PF = 0 } = props.value;
   
    //Employee name according to gender
    if (gender === "male") {
        eName = "Mr " + eName;
    }
    if (gender === "female") {
        eName = "Miss " + eName;
    }

    //if person owns a vehicle
    let personVehicle = " "
    if (gender === 'male' && vehicle === "false") {
        personVehicle = "He doesn't have a vehicle";
    }
    else if (gender === 'male' && vehicle === "true") {
        personVehicle = "He has a vehicle";
    }
    else if (gender === 'female' && vehicle === "true") {
        personVehicle = "She has a vehicle";
    }
    else if (gender === 'female' && vehicle === "false") {
        personVehicle = "She doesn't have a vehicle";
    }
    else {
        personVehicle = " ";
    }

    basicSalary = parseInt(basicSalary);
  
    let calDA = (basicSalary * parseInt(DA)) / 100;
    let calHRA = (basicSalary * parseInt(HRA)) / 100;
    let calPF = (basicSalary * parseInt(PF)) / 100;
    let netSalary = basicSalary + calDA + calHRA - calPF;
    return (
        <div className="displayPaySlip">
            {/* Employee No: {eNo} */}
            <h2 className="Display_Heading">Pay-Slip</h2>

            <div className="form-group row ">
                <label className="col-sm-4 col-form-label">Employee No:</label>
                <div className="col-sm-6 col-form-label ">
                    {eNo}
                </div>
            </div>

            <div className="form-group row ">
                <label className="col-sm-4 col-form-label ">Employee Name:</label>
                <div className="col-sm-6 col-form-label">
                    {eName}
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Department:</label>
                <div className="col-sm-6 col-form-label">
                    {department}
                </div>
            </div>

            <div className="form-group row ">
                <label className="col-sm-4 col-form-label">Owns Vahicle:</label>
                <div className="col-sm-6 col-form-label">
                    {personVehicle}
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Basic Salary:</label>
                <div className="col-sm-6 col-form-label">
                {basicSalary}
                </div>
            </div>
            <div className="form-group row ">
                <label className="col-sm-4 col-form-label">DA at {DA} %:</label>
                <div className="col-sm-6 col-form-label">
                {calDA}
                </div>
            </div>
            <div className="form-group row ">
                <label className="col-sm-4 col-form-label">HRA at {HRA} %:</label>
                <div className="col-sm-6 col-form-label">
                {calHRA}
                </div>
            </div>
            <div className="form-group row ">
                <label className="col-sm-4 col-form-label">PF at {PF} %:</label>
                <div className="col-sm-6 col-form-label">
                {calPF}
                </div>
            </div>
            <hr/>
            
            <div className="form-group row Net_Salary">
                <label className="col-sm-4 col-form-label">Net Salary:</label>
                <div className="col-sm-6 col-form-label">
                {netSalary}
                </div>
            </div>    
        </div>
    )
}

export default DisplayPaySlip;