require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const consoleStyler = require('./utils/consoleStyler');

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const categoriesRouter = require('./routes/categories');
const forumsRouter = require('./routes/forums');

// Create express instance
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    consoleStyler.info('Request received at ' + req.url);
    next();
});

// Require API routes
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/forums', forumsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    consoleStyler.success('Connected to MongoDB');

    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        consoleStyler.info('Server is running on port ' + PORT);
    });

}, (err) => {
    consoleStyler.error('Error connecting to MongoDB: ' + err);
});