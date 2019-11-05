import Service from '@ember/service';
import Ember from 'ember';


const {
    inject: {service}
} = Ember;


export default Service.extend({
    store: service(),

    currentNoteId: ''

});