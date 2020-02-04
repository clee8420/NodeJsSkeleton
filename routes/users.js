var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/async_sample', async (req, res, next) => {
  try {
    // Do something
    // next(); --> 이거 말고
    res.send('async_sample')
  } catch (error) {
    next(error);
  }
});

module.exports = router;
