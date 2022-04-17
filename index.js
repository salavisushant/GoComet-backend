const express = require ('express');
const cors = require ('cors');

const app = express ();

app.use(express.json());
app.use(cors());

const productController = require('./controller/product.controller')

const cartController = require('./controller/cart.controller');

const wishlistController = require('./controller/wishlist.controller')


app.use("/product", productController);

app.use("/wishlist", wishlistController);

app.use("/cart", cartController);

module.exports = app;