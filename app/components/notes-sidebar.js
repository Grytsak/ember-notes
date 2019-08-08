import Component from '@ember/component';
import Ember from 'ember';

const {
	inject: {service},
	get
} = Ember;

export default Component.extend({
	note: service(),
	classNames: ['notes-sidebar'],
	tagName: 'aside',

	actions: {
		addNewNote() {
			let note = get(this, 'note');
      note.createNote();
		}
	}
});

