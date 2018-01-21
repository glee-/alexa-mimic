var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;

function err(error, stdout, stderr) {
  	console.log("Output: "+stdout);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

/* POST commands. */
router.post('/', function(req, res, next) {
	console.log(req.body.command.trim().toLowerCase());
	switch (req.body.command.trim().replace(/ /g,'').toLowerCase()) {
	    case "blackmirror":
	        exec("open '/Users/Gary/Documents/Projects/Alexa/BlackMirror.app'", err);
	        break;
	    case "morningcoffee":
	        exec("open '/Users/Gary/Documents/Projects/Alexa/SpotifyCoffee.app'", err);
	        break;
	    case "startup":
	    	exec("open '/Users/Gary/Documents/Projects/Alexa/Startup.app'", err);
	        break;
	    case "hearthstone":
	    	exec("open '/Users/Gary/Documents/Projects/Alexa/Hearthstone.app'", err);
	        break;
	    case "developer":
	    	exec("open '/Users/Gary/Documents/Projects/Alexa/Developer.app'", err);
	        break;
	}
	res.send(200);
});


module.exports = router;
