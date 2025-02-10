const Product = require("../models/Product")


const productsController = {
  // GET /products
  index: async (req, res) => {
    const products = await Product.findAll()
    res.json(products)
  },

  // POST /products
  create: async (req, res) => {
    const { name, description, price, stockQuantity, isActive } = req.body
    const newProduct = await Product.create({ name, description, price, stockQuantity, isActive })
    res.status(201).json(newProduct)
  },

  // GET /products/:id
  show: async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product === null) return res.status(404).json({ message: "Product not found!" })
    res.json(product)
  },

  // PUT /products/:id
  update: async (req, res) => {
    const { id } = req.params
    const { name, description, price, stockQuantity, isActive } = req.body
    const updatedProduct = await Product.update(id, { name, description, price, stockQuantity, isActive })
    if (updatedProduct === null) return res.status(404).json({ message: "Product not found!" })
    res.json(updatedProduct)
  },

  // DELETE /products/:id
  delete: async (req, res) => {
    const { id } = req.body
    const result = await Product.delete(id)
    res.json(result)
  },
}

module.exports = productsController