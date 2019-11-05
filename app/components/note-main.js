import Component from '@ember/component';
import ScrollMixin from '../mixins/scroll-event';

import Ember from 'ember';

import {
    observer
} from '@ember/object';

const {
    inject: {service}
} = Ember;

export default Component.extend(ScrollMixin, {
    store: Ember.inject.service(),
    noteFunctions: service('note-functions'),

    currentNoteIdChanged: observer('noteFunctions.currentNoteId', function() {
        let noteService = this.get('noteFunctions');

        if (noteService.currentNoteId) {
            this.store.findRecord('note', noteService.currentNoteId)
                .then(note => {
                    this.set('noteTitle', note.get('title'));
                    this.set('noteBody', note.get('body'));
                });
        }
    }),

    classNames: ['note-main'],

    init() {
        this._super(...arguments);
        this.get('noteFunctions');
    },

    actions: {
        updateNoteTitle() {
            let noteService = this.get('noteFunctions'),
                noteTitle = this.get('noteTitle');

            if (noteService.currentNoteId) {
                this.store.findRecord('note', noteService.currentNoteId)
                    .then(function(note) {
                        note.set('title', noteTitle);
                        note.save();
                    });
            }
        },
        updateNoteBody(html) {
            let noteService = this.get('noteFunctions');

            if (noteService.currentNoteId) {
                this.store.findRecord('note', noteService.currentNoteId)
                    .then(function(note) {
                        note.set('body', html);
                        note.save();
                    })
            }
        }
    },

    didInsertElement() {
        this._super(...arguments)

        this.bindScrolling();
    },

    willRemoveElement() {
        this.unbindScrolling();
    },

    scrolled() {
        $(window).scroll(function(){
            if($(window).scrollTop() >= 110){
                $('.froala-editor-container').addClass('fixed');
            } else {
                $('.froala-editor-container').removeClass('fixed');
            }
        });
    }


});