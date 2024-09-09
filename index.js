// Import Classes Here
const Product = require("./classes/Product.js")
const Cart = require('./classes/Cart.js')
const Customer = require("./classes/Customer.js")


let newProduct = new Product("carrots", 4, "a bunch of carrots")
let newProduct1 = new Product("carrots", 3, "a bunch of carrots")



const newCart = new Cart();
newCart.addProduct(newProduct)
newCart.addProduct(newProduct1)

const customer = new Customer("john","john@gmail.com","112 shopping lane, victory 87927")








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