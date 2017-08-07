import React from 'react';
import EmpDetails from './empDetailsComp';
import {createContainer} from 'meteor/react-meteor-data';
import {EmpCol} from '../../imports/collections/ourEmployees';

const EmpList = (props) =>{
    console.log(props.employees);
    return(
        <div>
            <EmpDetails />
        </div>
    );
};

export default createContainer( () => {
    Meteor.subscribe('empCol');
    return {employees: EmpCol.find({}).fetch()};
}, EmpList);