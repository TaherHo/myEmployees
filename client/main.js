import React from 'react';
import reactDOM from 'react-dom';
import EmpList from './components/empListComp';

const App = () => {
    return (
        <div>
            <EmpList/>
        </div>
    )
};

Meteor.startup(() =>
    {
        reactDOM.render(<App/>, document.querySelector('.container'));
    }
);