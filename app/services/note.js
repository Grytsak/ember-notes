import Service from '@ember/service';
import Ember from 'ember';


const {
  inject: { service }
} = Ember;


export default Service.extend({
  store: service(),


    createNote() {

      let newNote = this.store.createRecord('note', {
        title: 'test title',
        body: 'test body',
        date: new Date()
      });

        newNote.save();


    },

    createNotesList() {
      let notes = this.store.peekAll('note');

      notes.forEach((item) => {
        let title = item.get('title');
        console.log('title: ', title);
      });
    }

});
