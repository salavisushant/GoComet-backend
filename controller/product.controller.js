const express = require ('express');
const Product = require ('../model/product.model');
const router = express.Router ();

router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    } catch (err) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
});



router.get('/', async (req, res) => {
    try {
    
        const page = +req.query.page || 1;
        const size = +req.query.limit || 20;
        const offset = (page - 1) * size;
        const product = await Product.find().skip(offset).limit(size).lean().exec();
        return res.status(201).send({ product });
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product)
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
})



module.exports = router;