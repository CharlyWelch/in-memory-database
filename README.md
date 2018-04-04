# In-memory Database

## Author: Charly Welch <blwbiology@gmail.com>

A tested Store class for storing and retrieving objects in local memory. Objects are stored in an array. 

Methods on the Store class include:

* `save(object)`:
 * generates an `_id` property on each object
 * returns the `object` with `_id` property
* `get(id)`
 * finds the object with matching id and returns it
 * if no object with matching id, returns `null`
* `getAll()`
 * returns an array of all objects in the store
 * the returned array is a copy of the store, thus store data remains immutable
 * if no objects exist in array, returns `[]`
* `remove(id)`
 * removes an object from th store that has matching id
 * if object was removed, returns `{ removed: true }`
 * if no object with matching id, returns `{ removed: false }`

  
## Technology
* Javascript
* Mocha testing
* eslint
* shortId to generate ids
