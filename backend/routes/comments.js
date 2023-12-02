const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Comments route');
});

router.get('/:id', (req, res) => {
    res.send('Comment ' + req.params.id);
});

router.post('/:id/like', (req, res) => {
    res.send('Like comment ' + req.params.id);
});

module.exports = router;