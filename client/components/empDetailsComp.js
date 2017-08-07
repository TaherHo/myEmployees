import React from 'react';

const EmpDetails = ({employee}) => {
    const {name , email, phone , avatar} = employee;
    return (
        <div>
            <div className="thumbnail">
                <img src={avatar}/>
                <div className="caption">
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">email:{email}</li>
                        <li className="list-group-item">phone:{phone}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EmpDetails;