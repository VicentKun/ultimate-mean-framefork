var express = require('express');

var router = express.Router();

// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
	
  //console.log('Time: ', Date.now());
	
  next();
	
});


// define the home page route

router.get('/', function(req, res) {
	
	//console.log('Application in mode: ' + req.app.get('env'));
	
	// res.send('You are at HOME! <br><br> Click <a href="/page"> Here </a> to go other page!');
	res.sendFile('public/index.html', {'root': './'});

});


module.exports = router;