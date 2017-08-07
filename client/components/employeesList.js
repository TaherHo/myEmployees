import {EmployeesCol1} from '../../imports/collections/employeesCol';
import React , {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import EmployeeDetails from './employeeDetails';

const PER_PAGE = 30;

class EmployeesList extends Component {
    componentWillMount(){
        this.page = 1;
    }
    handleButtonClick (){
    Meteor.subscribe('employeesCol', PER_PAGE * (this.page+1));
    this.page ++;
}
    render() {
        return (
            <div>
                <div className="employees-list">
                    {this.props.employeesSubset.map((employee) =>
                        <EmployeeDetails employee={employee} key={employee._id}/>
                    )}
                </div>
                <button onClick={this.handleButtonClick.bind(this)}
                        className="btn btn-primary">load more
                </button>
            </div>
        )
    };
}


export default createContainer(() => {
    Meteor.subscribe('employeesCol', PER_PAGE);

    return {employeesSubset: EmployeesCol1.find().fetch()};
}, EmployeesList);