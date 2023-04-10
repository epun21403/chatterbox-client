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
    RoomsView.$select.html('');
    Rooms.items().forEach(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $option = $('<option>')
      .val(roomname)
      .text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function() {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('Enter a room');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        // MessagesView.render();
      });
    }

  }
};
