let posts = [{ id: '1', title: 'Teste', content: 'Lorem ipsum..', createdAt: new Date(), updatedAt: new Date() }]

const postModel = {
    getAllPosts() {
        return posts
    },

    getPostByID(id) {
        return posts.find(post => post.id === id)
    },

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        return post
    },

    savePost(post) {
        posts.push(post)
    },

    updatePost(id, updatedPost) {
        const index = posts.findIndex(post => post.id === id)
        posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() }
    },

    deletePost(id) {
        posts = posts.filter(post => post.id !== id)
    },

    edit: (req, res) => {
        const id = req.params.id

        const post = postModel.getPostByID(id)

        res.render('editPostForm', {post})
    }
}

module.exports = postModel