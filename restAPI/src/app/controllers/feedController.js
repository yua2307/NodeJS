const { validationResult } = require('express-validator/check');

class FeedController {

    // GET /feeds/showAll
    getPosts(req, res, next) {
        res.status(200).json({
            posts: [
                {
                    _id: '1',
                    title: 'First Post',
                    content: 'this is out first post',
                    imageUrl: '/public/img/f8logo.jpeg',
                    creator: {
                        name: 'Van Chinh'
                    },
                    createdAt: new Date()
                }
            ]
        })
    }
    // POST /feeds/create

    createPost(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422)
                .json({
                    message: 'Validation failed , entered data is invalid',
                    errors: errors.array()
                });
        }
        const title = req.body.title;
        const content = req.body.content;
        console.log(title, content);

        console.log(req.body._id);
        res.status(201).json({
            message: 'Create successfully ',
            post: {
                _id: new Date().toISOString(),
                title: title,
                content: content,
                creator: {
                    name: 'Van Chinh'
                },
                createdAt: new Date()
            },
        })
    }
}

module.exports = new FeedController();