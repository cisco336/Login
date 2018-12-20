var express         = require('express'),
routes          = express.Router();
var passport        = require('passport');
var bodyParser  = require('body-parser');

// Controllers
var userController  = require('./controller/user-controller');
var productsController = require('./controller/products-controller');
var contactMsg = require('./controller/msg-controller');

routes.get('/', passport.authenticate('jwt', { session: false }),(req, res) => {
return res.send('Hello, this is the API!');
});

routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);

// Products
routes.get('/products', productsController.allProducts);

// Single Product
routes.get('/product/:id', productsController.getProduct);

// Add Product
routes.post('/product/add', productsController.addProduct);

// Add ContactMsg
routes.post('/msg/add', bodyParser.json(), contactMsg.addContactMsg);

// Get ContactMsg
routes.get('/msg/add', contactMsg.getContactMsg);

// Special Get
routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
return res.json({ msg: `Hey ${req.user.email}! I open at the close.` });
});

module.exports = routes;