const express = require('express');
const {
    testControlleur,
    usersControlleur,
    createUser
} = require('../controllers/userControlleur');

const router = express.Router();

router.get('/', usersControlleur);

router.get('/:id', (req, res) => {
    res.send('User ' + req.params.id);
});

router.get('/:id/posts', (req, res) => {
    res.send('Posts of user ' + req.params.id);
});

router.post('/', createUser);

module.exports = router;