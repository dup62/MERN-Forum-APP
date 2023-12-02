const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Posts route');
});

router.get('/:id', (req, res) => {
    res.send('Post ' + req.params.id);
});

router.get('/:id/comments', (req, res) => {
    res.send('Comments of post ' + req.params.id);
});

router.post('/:id/like', (req, res) => {
    res.send('Like post ' + req.params.id);
});

module.exports = router;