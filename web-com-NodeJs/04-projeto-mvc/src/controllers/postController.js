const postModel = require("../models/postModel")

const postController = {
    index: (req, res) => {
        const posts = postModel.getAllPosts()

        res.render('index', {posts})
    },

    show: (req, res) => {
        const id = req.params.id

        const post = postModel.getPostByID(id)

        res.render('post', {post})
    }
}

module.exports = postController