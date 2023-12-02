const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Forum = require('../models/Forum');
const Category = require('../models/Category');


const testControlleur = async (req, res) => {

    const Cat1 = await Category.create({
        name: 'Test category 1',
        description: 'Test category description'
    });

    const Cat2 = await Category.create({
        name: 'Test category 2',
        description: 'Test category description'
    });

    const Fofo1a = await Forum.create({
        name: 'Test forum 1',
        description: 'Test forum description',
        category: Cat1._id
    });

    const Fofo1b = await Forum.create({
        name: 'Test forum 2',
        description: 'Test forum description',
        category: Cat1._id
    });

    const Fofo2a = await Forum.create({
        name: 'Test forum 1 - b',
        description: 'Test forum description',
        category: Cat2._id
    });

    const Fofo2b = await Forum.create({
        name: 'Test forum 2 - b',
        description: 'Test forum description',
        category: Cat2._id
    });

    const Fofo3b = await Forum.create({
        name: 'Test forum 3 - b',
        description: 'Test forum description',
        category: Cat2._id
    });

    // Je veux ajouter les forums dans les catégories
    Cat1.forums.push(Fofo1a._id);
    Cat1.forums.push(Fofo1b._id);
    Cat2.forums.push(Fofo2a._id);
    Cat2.forums.push(Fofo2b._id);
    Cat2.forums.push(Fofo3b._id);

    await Cat1.save();
    await Cat2.save();

    const User1 = await User.create({
        username: 'User 1',
        email: 'mail@mail.fr',
        password: 'password',
        posts: [],
        comments: []
    });

    const User2 = await User.create({
        username: 'User 2',
        email: 'mail2@mail.fr',
        password: 'password',
        posts: [],
        comments: []
    });

    const Post1 = await Post.create({
        title: 'Test post 1',
        content: 'Test post content',
        author: User1._id,
        comments: [],
        likes: 0
    });

    const Post2 = await Post.create({
        title: 'Test post 2',
        content: 'Test post content',
        author: User2._id,
        comments: [],
        likes: 0
    });

    await User1.posts.push(Post1._id);
    await User2.posts.push(Post2._id);

    await User1.save();
    await User2.save();

    await Fofo1a.posts.push(Post1._id);
    await Fofo1b.posts.push(Post1._id);
    await Fofo2a.posts.push(Post2._id);
    await Fofo2b.posts.push(Post2._id);
    await Fofo3b.posts.push(Post2._id);

    await Fofo1a.save();
    await Fofo1b.save();
    await Fofo2a.save();
    await Fofo2b.save();
    await Fofo3b.save();

    const Comment1 = await Comment.create({
        content: 'Test comment content',
        author: User1._id,
        post: Post1._id,
        likes: 0
    });

    const Comment2 = await Comment.create({
        content: 'Test comment content 2',
        author: User1._id,
        post: Post1._id,
        likes: 0
    });

    await User1.comments.push(Comment1._id);
    await User1.comments.push(Comment2._id);

    await User1.save();

    await Post1.comments.push(Comment1._id);
    await Post1.comments.push(Comment2._id);

    await Post1.save();

    res.send('Test route');
};

const usersControlleur = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1});
    res.status(200).json(users);
};

module.exports = {
    testControlleur,
    usersControlleur
};