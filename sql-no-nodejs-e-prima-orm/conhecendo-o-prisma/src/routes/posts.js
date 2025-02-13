const { Router } = require("express");
const prisma = require("../database");

const router = Router();

router.get('/', async (req, res) => {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    res.json(posts)
})

router.post('/', async (req, res) => {
    const { title, content, published, authorId, slug } = req.body;
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            published,
            authorId,
            slug
        }
    })

    res.status(201).json(newPost)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const uniquePost = await prisma.post.findUnique({
        where: { id: +id },
        include: {
            author: true
        }
    });
    res.json(uniquePost)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, content, published, authorId, slug } = req.body;
    const updatedPost = await prisma.post.update({
        data: {
            title,
            content,
            published,
            authorId,
            slug
        },
        where: {
            id: +id
        }
    })

    res.json(updatedPost)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedPost = await prisma.post.delete({
        where: { id: +id }
    })

    res.json({ message: "Post deleted successfuly!" })
})

module.exports = router