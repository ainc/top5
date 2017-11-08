import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
    // attrs: {
    //     bigThings: { embedded: 'always' },
    //     personals: { embedded: 'always' }
    // }
});
