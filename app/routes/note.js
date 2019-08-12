import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.peekAll('note');
    // return [{title: "test", description: "test descr"}];
  }
});
