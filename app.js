// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/node8')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

var appctrl = require('./public/controllers/appctrl.js')

// displays a list of applicants
app.get('/applicants', appctrl.getApplicants);

// creates and applicant
app.post('/applicant', appctrl.createApplicant)
	// Here is where you need to get the data
	// from the post body and store it in the database
	
app.post('/success', appctrl.getApplicants)

app.get('/applicant', function(req, res){
	res.send(req.body)
})





// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})