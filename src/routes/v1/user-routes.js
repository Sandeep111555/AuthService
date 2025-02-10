const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();
router.post('/register', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);
router.delete('/:userId', UserController.deleteUser);
module.exports = router;
