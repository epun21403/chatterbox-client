// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('click', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    //retreiving data object with room names
    var allRooms = Rooms.retrieveRooms();
    console.log(allRooms);
    for (var i = 0; i < allRooms.length; i++) {
      RoomsView.renderRoom(allRooms[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(`<option value="room">${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // for (var i = 0; i < Messages._data.length; i++) {
    //   Rooms.add(Messages._data[i].roomname);
    // }

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var userInput = prompt('Add room');
    if (!Rooms._data[userInput]) {
      Rooms._data[userInput] = userInput;
      Rooms.add(userInput);
      RoomsView.renderRoom(userInput);
    }
  }
};
