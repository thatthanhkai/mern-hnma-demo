var express = require('express');
var router = express.Router();
const User = require('../model/user.model');


router.get('/dummy', async (req, res, next) => {
  const users = await User.insertMany([
    {
      username: 'user1',
      password: 123456
    }, {
      username: 'user2',
      password: 654321
    }
  ])

  res.send({
    msg: 'ok',
    data: users
  });
});

router.get('/', async (req, res, next) => {
  const users = await User.find()

  res.send({
    msg: 'ok',
    data: users
  });
});


module.exports = router;
