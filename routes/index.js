var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'About Us' });
});

router.get('/servicei', function(req, res, next) {
  res.render('service', { title: 'Service' });
});

module.exports = router;
