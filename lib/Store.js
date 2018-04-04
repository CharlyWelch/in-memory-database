const shortid = require('shortid');

class Store {

    constructor() {
        this.state = [];
    }

    save(object){
        const id = shortid.generate();
        object[_id] = id;
        this.state.push(object);
    }
}

module.exports = Store;