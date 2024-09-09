// Import Classes Here
const Product = require("./classes/Product.js")
const Cart = require('./classes/Cart.js')
const Customer = require("./classes/Customer.js")
const Auth = require("./classes/Auth.js")


const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");

const melanie = new Customer("Melanie", "melanie@gmail.com", "22 Main St");

const myCart1 = new Cart();
myCart1.addProduct(strawberries);
myCart1.addProduct(mangos);

const myCart2 = new Cart();
myCart2.addProduct(carrots);

melanie.addToOrderHistory(myCart1);
melanie.addToOrderHistory(myCart2);

melanie.getRewardsPoints();

// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}