import React from 'react';
import reactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            from main-js
        </div>
    )
};

Meteor.startup(() =>
    {
        reactDOM.render(<App/>, document.querySelector('.container'));
    }
);