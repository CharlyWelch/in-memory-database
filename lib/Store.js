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

    getAll() {
        return this.database.slice();
    }

    remove(id) {
        for(let i = 0; i < this.database.length; i ++) {
            if(this.database[i]._id === id) {
                this.database.splice(i, 1);
                return { removed: true };
            } else {
                return { removed: false };
            }
        }
    }
};