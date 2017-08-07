import React from 'react';
import EmpDetails from './empDetailsComp';
import {createContainer} from 'meteor/react-meteor-data';
import {EmpCol} from '../../imports/collections/ourEmployees';

const EmpList = ({employees}) => {

    return (
        <div>
            <div className="employees-list">
                {employees.map(employee =>
                    <EmpDetails key={employee._id} employee={employee}/>
                )}
            </div>
            <button className="btn btn-primary"> Load more</button>
        </div>

    );
};

export default createContainer(() => {
    Meteor.subscribe('empCol');
    return {employees: EmpCol.find({}).fetch()};
}, EmpList);