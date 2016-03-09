if (Meteor.isServer) {
	Meteor.startup(function(){
		if(Chats.find().count() === 0) {
			Mensajes.remove({});

			var mensajes = [
				{
					text: 'Mensaje 1',
					timestamp: moment().subtract(1, 'hours').toDate()
				},
				{
					text: 'Mensaje 2',
					timestamp: moment().subtract(3, 'hours').toDate()
				},
				{
					text: 'Mensaje 3',
					timestamp: moment().subtract(2, 'days').toDate()
				}
			];

			mensajes.forEach(m => Mensajes.insert(m));

			var chats = [
				{
					name: 'Luis Miguel',
					picture: 'http://www.almostsavvy.com/wp-content/uploads/2011/04/profile-photo.jpg'
				},
				{
					name: 'Roberto',
					picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbH-D14iM9xVUppNpL9BmchB1ysVj6g4nPZOgNBj-kygVSIQH'
				},
				{
					name: 'Jhon',
					picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4cAR0b6zFqpzpZjPA-vrJjlxKaDffcovv0Ey1AaMdPrplaWkO'
				}
			];

			chats.forEach(chat => {
				let mensaje = Mensajes.findOne({ chatId: { $exists : false}});
				chat.lastMessage = mensaje;
				let chatId = Chats.insert(chat);
				Mensajes.update(mensaje._id, { $set: { chatId: chatId}})
			});
		}
	});
}