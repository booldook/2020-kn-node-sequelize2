var express = require('express');
var router = express.Router();
var { User } = require('../models');

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/create', async (req, res, next) => {
  let result = await User.create({ userid: 'booldook', userpw: '0000', username: '임덕규' });
  res.json(result);
});

module.exports = router;
