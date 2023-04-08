// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.

    for (var i = 0; i < messages.length; i ++) {

      var $message = MessageView.render(messages[i]);
      if ($message.text === undefined) {
        MessagesView.$chats.append($message);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //appending message to the chat div
    //MessageView.render(message);
    $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.isFriend(event);
  }

};