const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
	return 	console.log('Unable to connect to mongodb server');
	}
	console.log('Connect to Mongodb server');

/*	db.collection('Todos').insertOne({
		text: 'Something to do ',
		completed: false
	}, (err, result) => {

		if(err) {
			return console.log('Unable to insert todo')
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/
	db.collection('Users').insertOne({
		name: 'Mathew ',
		age: 1,
		location: 'Nigeria'
		
	}, (err, result) => {

		if(err) {
			return console.log('Unable to insert todo')
		}
		console.log(result.ops);
	});

	db.close();
});


