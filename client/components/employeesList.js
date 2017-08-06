import {EmployeesCol1} from '../../imports/collections/employeesCol';
import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import EmployeeDetails from './employeeDetails';


const EmployeesList = (props) => {
    console.log(props);
    return (
        <div className="employeeslist">
            {props.employeesSubset.map((employee) => <EmployeeDetails employee={employee} key={employee._id}/>)}
        </div>
    )
};


export default createContainer( () => {
    Meteor.subscribe('employeesCol');

    return { employeesSubset:EmployeesCol1.find().fetch()};
},EmployeesList);