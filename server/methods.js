Meteor.methods({
  newMessage: function (mensaje) {
    check(mensaje, {
      text: String,
      chatId: String
    });
 
    mensaje.timestamp = new Date();
 
    var messageId = Mensajes.insert(mensaje);
    Chats.update(mensaje.chatId, { $set: { lastMessage: mensaje } });
    return messageId;
  }
});