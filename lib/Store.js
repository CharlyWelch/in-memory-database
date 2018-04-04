const shortid = require('shortid');

module.exports = class Store {

    constructor() {
        this.database = [];
    }

    save(object){
        object._id = shortid.generate();
        this.database.push(object);
    }
};