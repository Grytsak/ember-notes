import Component from '@ember/component';
import Ember from 'ember';

const {
    inject: {service},
} = Ember;

export default Component.extend({
    store: service(),

    classNames: ['notes-sidebar'],
    tagName: 'aside',

    actions: {
        addNewNote() {
            let newNote = this.store.createRecord('note', {
                title: this.get('noteTitle'),
                body: this.get('noteBody'),
                date: new Date(Date.now()).toLocaleString()
            });

            newNote.save();
        }
    }
});

