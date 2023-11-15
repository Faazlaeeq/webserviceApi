
const express = require('express');

const router = express.Router();

const Product = require('../model/product_model');

router.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/products', async (_, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/products/:id', async (req, res) => {
    console.log("Id:"+req.params.id);
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.send("Following product is deleted :\n\n"+product);
    } catch (error) {
        res.status(500).send(error+req.query.id);
    }
});

module.exports = router;
