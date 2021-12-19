var express = require('express');
 
var app = express();
var mysql = require('mysql');

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

const connection = mysql.createConnection({
	host : 'localhost',
	user: 'root',
	database: 'join_us'
});

app.get("/", function(req, res){

	//Without ejs
	// var q = 'SELECT COUNT(*) as count FROM users ';
	// connection.query(q, function (error, results, fields) {
	//   if (error) throw error;
	//   // console.log(results[0].count);
	// res.send("There are " + results[0].count + " emails listed on our database");
	// });
	// connection.end();
	
	//With ejs
	var q = 'SELECT COUNT(*) as count FROM users ';
	connection.query(q, function (error, results, fields) {
	if (error) throw error;
	var count = (results[0].count);
	res.render('home', { data : count });
	});
});

app.post('/register', function(req,res){
	var person = {email: req.body.email};
	connection.query(
		'INSERT INTO users SET ?', person, function(err, result) {
	console.log(err);
	console.log(result);
	res.redirect("/");
  });
});

app.use(express.static('/public'))

app.listen(3000, function () {
 console.log('App listening on port 3000!');
});