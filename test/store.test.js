const assert = require('assert');
const Store = require('../lib/Store');

describe('Store tests', () => {

    const testItem = {
        name: 'Alfonzo',
        occupation: 'Rodeo trickster'
    };

    it('initializes with an empty array', () => {
        const store = new Store();
        assert.deepEqual(store.database, []);
    });

    it('saves an object to the store', () => {
        const store = new Store();
        store.save(testItem);
        assert.equal(store.database[0].name, 'Alfonzo');
    });
});