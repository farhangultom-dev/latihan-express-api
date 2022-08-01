var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req,res) {
  res.json({
    code: "Hi, I'am Farhansen!"
  });
});

module.exports = router;
