import React, {Component} from 'react';
import EmpDetails from './empDetailsComp';
import {createContainer} from 'meteor/react-meteor-data';
import {EmpCol} from '../../imports/collections/ourEmployees';

const PER_PAGE = 20;

class EmpList extends Component {
    componentWillMount(){
        this.page= 1;
    }

    loadClickHandler(){
        Meteor.subscribe('empCol', PER_PAGE*(this.page+1));
        this.page ++;
    }
    render() {
        return (
            <div>
                <div className="employees-list">
                    {this.props.employees.map(employee =>
                        <EmpDetails key={employee._id} employee={employee}/>
                    )}
                </div>
                <button onClick={this.loadClickHandler.bind(this)} className="btn btn-primary"> Load more</button>
            </div>

        );
    };
}


export default createContainer(() => {
    Meteor.subscribe('empCol', PER_PAGE);
    return {employees: EmpCol.find({}).fetch()};
}, EmpList);