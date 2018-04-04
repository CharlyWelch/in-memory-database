const assert = require('assert');
const Store = require('../lib/Store');

describe('Store tests', () => {

    const testItem = {
        id: 123,
        name: 'Alfonzo',
        occupation: 'Rodeo trickster'
    };

    it('initializes with an empty array', () => {
        const store = new Store();
        assert.deepEqual(store.state, []);
    });

    it('saves an object to the store', () => {
        const newItem = Store.save(testItem);
        assert.equal(Store.state, [newItem]);
    });
});