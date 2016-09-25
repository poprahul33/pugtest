var express = require('express');

var router = express.Router();

router.get('/services', function(req, res){
    res.render('services', 
              {pretty: true});
});

module.exports = router;