const express = require ('express');
const Wishlist = require ('../model/wishlist.model');
const router = express.Router ();

router.post("/", async (req, res) => {
    try {
        const wishlist = await Wishlist.create(req.body);
        return res.status(201).send(wishlist);
    } catch (e) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
});



router.get('/', async (req, res) => {
    try {
        const wishlist = await Wishlist.find().lean().exec();
        return res.status(201).send({ wishlist });
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
});

router.delete("/:id", async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(wishlist);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


module.exports = router;