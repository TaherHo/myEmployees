import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import {EmployeesCol1} from '../imports/collections/employeesCol';
import {image, helpers} from 'faker';

Meteor.startup(() => {
    if(! EmployeesCol1.find({}).count()){

        console.log(EmployeesCol1.find({}).count());
        _.times(5000, () => {
            const {name, email , phone} = helpers.createCard();

            EmployeesCol1.insert({
                name, email, phone,
                avatar:image.avatar()
            });
        });
    }

    Meteor.publish('employeesCol', function (per_page) {
        return EmployeesCol1.find({}, {limit:per_page})
    });
});