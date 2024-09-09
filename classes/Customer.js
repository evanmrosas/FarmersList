const Product = require("./Product.js")

class Customer{
    constructor(name, email, shippingAddress){
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
        this.rewardPoints = 0;
    }

    addToOrderHistory(cart){
        this.orderHistory.push(cart)
    }

    getRewardsPoints(){
        
        for(let i = 0; i < this.orderHistory.length; i++){
            for(const prod in this.orderHistory[i]){
                console.log(this.orderHistory[i])
            }
        }
        //return this.rewardPoints = count * product.rewardPoints
    }
}

module.exports = Customer;