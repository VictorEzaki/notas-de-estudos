const { Router } = require("express");
const prisma = require("../database");

const router = Router();

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users)
})

router.post('/', async (req, res) => {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
        data: {
            name, 
            email
        }
    })

    res.status(201).json(newUser)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        },
        include: {
            posts: true
        }
    })

    res.status(200).json(user)
})

router.put('/:id', async (req, res) => {
    const { name, email } = req.body
    const { id } = req.params
    const updatedUser = await prisma.user.update({
        data: { name, email },
        where: { id: Number(id) }
    })

    res.json(updatedUser)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedUser = await prisma.user.delete({
        where: {
            id: +id
        }
    })

    res.json(deletedUser)
})

module.exports = router;