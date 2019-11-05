import DS from 'ember-data';

const {
    attr
} = DS;

export default DS.Model.extend({
    title: attr('string'),
    updated: attr('string', {
        defaultValue() {
            return new Date(Date.now()).toLocaleString();
        }
    })
});
