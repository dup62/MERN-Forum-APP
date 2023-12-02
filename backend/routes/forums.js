const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
    res.send('Forum ' + req.params.id);
});

module.exports = router;