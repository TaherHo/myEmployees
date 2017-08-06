import React from 'react';
import reactDOM from 'react-dom';
import EmployeesList from './components/employeesList';

const App = () => {
    return (
        <EmployeesList/>
    )
};

Meteor.startup(() => {
    reactDOM.render(<App/>, document.querySelector('.container'))
});