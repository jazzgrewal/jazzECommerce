var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/jazz', function(req, res, next) {
  res.redirect("../index");
});

module.exports = router;
