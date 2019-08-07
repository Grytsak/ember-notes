import Component from '@ember/component';

export default Component.extend({
  classNames: ['note-main'],

  actions: {
    showText(html) {
      console.log(html);
    }
  }


});