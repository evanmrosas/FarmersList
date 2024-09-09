class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(product){
        this.products.push(product);
        this.total+= product.price;
    }

    removeProduct(index){
        for(let i = 0; i < this.products.length; i++){
            if(i == index){
                this.total -= this.products[i].price;
                this.products.splice(i,1)

            }
        }
    }
}

module.exports = Cart;