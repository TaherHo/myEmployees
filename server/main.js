import {EmpCol} from '../imports/collections/ourEmployees';
import _ from 'lodash';
import {helpers , image} from 'faker';

Meteor.startup(() => {

   if(!EmpCol.find({}).count()){
       _.times(2000, () => {
           const {name , email , phone} = helpers.createCard();
           EmpCol.insert({
               name , email , phone,
               avatar : image.avatar()
           });
       })
   }

   Meteor.publish('empCol', ()=> {return EmpCol.find({}, {limit:20})});
});