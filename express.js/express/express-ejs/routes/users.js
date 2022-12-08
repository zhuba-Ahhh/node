var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.cookies);
  res.send('zhuba');
});


router.post('/user/add', (req, res) => {
  console.log(req.body);
  res.send({
    ok: 1
  })
})

module.exports = router;