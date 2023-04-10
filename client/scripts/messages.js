// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  container: {},

  // TODO: Define methods which allow you to retrieve from, add to, and generally interact with the messages.
  items: function() {
    return Object.values(Messages.container);
  },

  add: function(message, callback) {
    Messages.container[message.objectId] = Messages.clean(message);
    callback(Messages.items());
  },

  update: function(messages, callback) {
    for (const message of messages) {
      Messages.add(message);
    }
    callback(Messages.items());
  },

  clean: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  },

};