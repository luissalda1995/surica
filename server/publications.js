if (Meteor.isServer) {
  Meteor.publishComposite('chats', function (userId) { 
    return {
      find: function () {
        return Chats.find({ userIds: userId });
      },
      children: [
        {
          find: function (chat) {
            return Mensajes.find({ chatId: chat._id });
          }
        }
      ]
    };
  });
}