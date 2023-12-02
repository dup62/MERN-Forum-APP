const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Categories route');
});

router.get('/:id/forums', (req, res) => {
    res.send('Forums of category ' + req.params.id);
});

module.exports = router;