var express = require("express");
var path = require("path");
var router = express.Router();


router.get("/:location?", function(req, res)
{
	var chosen = req.params.location;
	
	if (chosen === "stats")
	{
		res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
	}

	else
	{
		res.sendFile(path.join(__dirname, "..", "public", "index.html"));
	}
})

module.exports = router;