const shortid = require('shortid');

module.exports = class Store {

    constructor() {
        this.database = [];
    }

    save(object) {
        object._id = shortid();
        this.database.push(object);
        return object;
    }

    get(id) {
        return this.database.find(object => {
            if(object._id === id) return object;
            else return null;
        });
    }
};