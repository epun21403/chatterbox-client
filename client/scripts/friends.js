// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  storage: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  items: function() {
    return [...Friends.storage];
  },

  isFriend: function(friend) {
    return Friends.storage.has(friend);
  },

  toggleStatus: function(name, callback = () => {}) {
    if (Friends.isFriend(name)) {
      Friends.storage.delete(name);
      callback(false);
    } else {
      Friends.storage.add(name);
      callback(true);
    }
  }

};