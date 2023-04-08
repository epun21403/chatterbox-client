// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(name) {
    var $newRoom = $(`<option value="room">${name}</option>`);
    RoomsView.$select.append($newRoom);
  },

  update: function(data) {
    for (var i = 0; i < data.length; i++) {
      var currentRoom = data[i].roomname;
      if (Rooms._data[currentRoom] === undefined) {
        Rooms._data[currentRoom] = currentRoom;
      }
    }
  },

  retrieveRooms: function() {
    return Object.keys(Rooms._data);
  }

};