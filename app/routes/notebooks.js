import Route from '@ember/routing/route';

export default Route.extend({
    mode() {
        return this.store.findAll('notebook');
    }

});
