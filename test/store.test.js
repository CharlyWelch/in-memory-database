const assert = require('assert');
const Store = require('../lib/Store');

describe('Store tests', () => {

    const testItem = {
        name: 'Alfonzo',
        occupation: 'Rodeo trickster'
    };

    const store = new Store();

    it('initializes with an empty array', () => {
        assert.deepEqual(store.database, []);
    });

    it('saves an object to the store', () => {
        store.save(testItem);
        assert.equal(store.database[0].name, 'Alfonzo');
        assert.equal(store.database[0].occupation, 'Rodeo trickster');
    });

    it('returns an object from the database with the given _id', () => {
        const savedObj = store.save({ name: 'Birdie' });
        const returnedObj = store.get(savedObj._id);
        assert.deepEqual(returnedObj, savedObj);
    });

    it('returns null if _id not in store', () => {
        const noObject = store.get(2);
        assert.deepEqual(noObject, null);
    });

    it('returns copy array of all objects in store', () => {
        const database = store.getAll();
        assert.deepEqual(database, store.database);
    });

    it('removes an item and returns { removed: true }', () => {
        const store2 = new Store();
        const savedItem = store2.save({ name: 'Henrietta' });
        const removed = store2.remove(savedItem._id);
        assert.deepEqual(removed, { removed: true });
    });

    it('looks for nonexistant item and returns { removed: false }', () => {
        const removed = store.remove('2');
        assert.deepEqual(removed, { removed: false });
    });
});