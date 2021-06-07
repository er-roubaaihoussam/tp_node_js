var express = require('express');
const { Model } = require('sequelize/types');
var router = express.Router();
const usersRepo = require('../respositories/users')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await usersRepo.getAllUsers());
});

router.get('/users',async function(req, res, next) {
  res.send(await usersRepo.getUsers());
  next()
});

router.get('/users/:id',async function(req, res, next) {
  res.send(await usersRepo.getUser(req.params.id));
  next()
});

router.post('/users',async function(req, res, next) {
  res.send( usersRepo.addUser(req.body));
  next()
});

router.put('/users',async function(req, res, next) {
  res.send( usersRepo.updateUser(req.body));
  next()
});

router.delete('/users:/id',async function(req, res, next) {
  res.send( usersRepo.deleteUser(req.params.id));
  next()
});





module.exports = router;
