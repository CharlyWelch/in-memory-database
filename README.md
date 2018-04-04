# In-memory Database

## Author: Charly Welch <blwbiology@gmail.com>

A tested Store class for storing and retrieving objects in local memory. 

Methods on the Store class include:

* `.save(<objectToSave>)`
  * creates an `_id` property on the object
  * returns `objectToSave` with added `_id` property
* `.get(<id>)`
  * returns the object that has that id
  * return `null` if that id does not exist
* `.getAll()`
  * returns array of all objects
  * return empty array `[]` when no objects
  * do **not** return the underlying array
* `.remove(<id>)`
  * removes the object from the store that has that id
  * return `{ removed: true }` if the object was removed, else return `{ removed: false }` if the 
  object did not exist