const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
}, { timestamps: true });

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
