Meteor.methods({
  newChat: function(userId, otherId) {
 
    check(otherId, String);
 
    var chat = {
      userIds: [userId, otherId],
      createdAt: new Date()
    };
 
    return Chats.insert(chat);
  },  

  newMessage: function(mensaje) {
    check(mensaje, {
      text: String,
      chatId: String,
      userId: String
    });
 
    mensaje.timestamp = new Date();
 
    var messageId = Mensajes.insert(mensaje);
    Chats.update(mensaje.chatId, { $set: { lastMessage: mensaje } });
    return messageId;
  }
});