const express = require('express');
const {
    usersControlleur,
    createUser,
    deleteUser
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

router.delete('/:id', deleteUser);

module.exports = router;