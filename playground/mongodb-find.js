//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

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
	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
		
	// }, (err) => {

	// 	console.log('Unable to insert todo') 
		
	// 	//console.log(result.ops);
	// });

	db.collection('Users').find({name: 'Mathew'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5b817ff484b620b22427f0c7')
	// 	}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));	
	// }, (err) => {

	// 	console.log('Unable to insert todo')
		
	// 	console.log(result.ops);
	// });

	//db.close();
});


