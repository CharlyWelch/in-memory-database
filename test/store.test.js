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

    
});