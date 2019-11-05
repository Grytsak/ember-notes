import Component from '@ember/component';

import Ember from 'ember';

const {
    inject: {service}
} = Ember;

export default Component.extend({
    // classNames: ['all-notes__note']
    store: Ember.inject.service(),
    noteFunctions: service('note-functions'),

    click(e) {
       if(e.target.tagName !== "BUTTON") {
           this.set('noteFunctions.currentNoteId', this.get('note.id'));
       }
    },

    actions: {
        deleteNote() {
            this.store.findRecord('note', this.get('note.id'))
                .then(function (note) {
                    note.destroyRecord();
                });
        }
    }
});
