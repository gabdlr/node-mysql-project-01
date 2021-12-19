// var faker = require('faker');
// var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host : 'localhost',
// 	user: 'root',
// 	database: 'join_us'
// });

// SELECTING DATA
// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

//CLASSIC INSERT (which in my opinion could be actually dynamically used sith tmplate strings )
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';
 
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

//Fancy insert
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//MySQL js library magically turns js dates to mysql dates when using the fancy insert
// var person = {
	
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
//This shows the date is not mysql format but then magic lib stuff and now you have it in mysql format
// console.log(person);

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//This will show us the actual query that was sent to mysql
// console.log(end_result.sql);

//Fill user's table with 500 users

// var data = [];
// for(var i = 0; i < 500; i++){
//     data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

//Note the sintax and 
// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

// connection.end();
