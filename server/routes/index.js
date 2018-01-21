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
	switch (req.body.command.trim().replace(/ /g,'').toLowerCase()) {
	    case "blackmirror":
	        exec("open 'examples/BlackMirror.app'", err);
	        break;
	    case "morningcoffee":
	        exec("open 'examples/SpotifyCoffee.app'", err);
	        break;
	    case "startup":
	    	exec("open 'examples/Startup.app'", err);
	        break;
	    case "hearthstone":
	    	exec("open 'examples/Hearthstone.app'", err);
	        break;
	    case "developer":
	    	exec("open 'examples/Developer.app'", err);
	        break;
	}
	res.send(200);
});


module.exports = router;
