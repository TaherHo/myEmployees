import React from 'react';
import EmpDetails from './empDetailsComp';
import {createContainer} from 'meteor/react-meteor-data';
import {EmpCol} from '../../imports/collections/ourEmployees';

const PER_PAGE = 20;

const EmpList = ({employees}) => {

    return (
        <div>
            <div className="employees-list">
                {employees.map(employee =>
                    <EmpDetails key={employee._id} employee={employee}/>
                )}
            </div>
            <button onClick={() => Meteor.subscribe('empCol' , 40)} className="btn btn-primary"> Load more</button>
        </div>

    );
};

export default createContainer(() => {
    Meteor.subscribe('empCol', PER_PAGE);
    return {employees: EmpCol.find({}).fetch()};
}, EmpList);