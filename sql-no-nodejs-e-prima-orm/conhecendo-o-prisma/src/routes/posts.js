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

router.get('/search', async (req, res) => {
    const { title, authorId, published, startDate, endDate } = req.query

    const filter = {}

    if (title) {
        filter.title = {
            contains: title,
            mode: 'insensitive'
        }
    }

    if (authorId) {
        filter.authorId = +authorId
    }

    if (published) {
        filter.published = published === 'true'
    }

    if (startDate || endDate) {
        filter.createdAt = {}
        if (startDate) {
            filter.createdAt.gte = new Date(startDate)
        }
        if (endDate) {
            filter.createdAt.lte = new Date(endDate)
        }
    }

    const posts = await prisma.post.findMany({
        where: filter,
        orderBy: {
            createdAt: 'desc'
        }
    })

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
            slug,
            tags: {
                connect: req.body.tags
            }
        }
    })

    res.status(201).json(newPost)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const uniquePost = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: {
            author: true,
            tags: true
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
            slug,
            tags: {
                set: req.body.tags
            }
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