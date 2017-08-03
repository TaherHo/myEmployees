import {EmployeesCol} from '../imports/collections/employeesCol';
import _ from 'lodash';
import {image, helpers} from 'faker';

console.log(EmployeesCol.find({}).count());
Meteor.startup(() => {
    if(!EmployeesCol.find().count()){
        _.times(5000, () => {
            const {name, email , phone} = helpers.createCard();
            EmployeesCol.insert({
                name, email, phone,
                avatar:image.avatar()
            })
        })
    }
});