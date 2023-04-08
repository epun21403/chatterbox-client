// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'Anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.stopSpinner();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.retrieve(data);
      Rooms.update(data);
      MessagesView.render(Messages._data);
      RoomsView.render();
      // for (var i = 0; i < data.length; i++) {
      //   var room = data[i].roomname;
      //   if (room !== undefined) {
      //     RoomsView.renderRoom(room);
      //   } else {
      //     RoomsView.renderRoom('');
      //   }
      // }
      //setInterval(App.fetch, 10000);
      console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
