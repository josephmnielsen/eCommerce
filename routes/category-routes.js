const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ where: {id: req.params.id}, include: [
      {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
  })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.post('/categories', (req, res) => {
  // create a new category
  Category.create({category_name: req.body.category_name})
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: { id: req.params.id }})
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where: { id: req.params.id }})
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

module.exports = router
