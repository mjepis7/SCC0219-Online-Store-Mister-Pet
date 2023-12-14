class Product{
    constructor(name, price, weight, description, category, inStock, image, id_code){
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.description = description;
        this.category = category;
        this.image = image;
        this.inStock = inStock // Numero da quantidade em estoque
        this.id_code = id_code;
    }
    getProductName(){
        return this.name;
    }
    getProductPrice(){
        return this.price;
    }
    getProductWeight(){
        return this.weight;
    }
    getProductDescription(){
        return this.description;
    }
    getProductCategory(){
        return this.category;
    }
    getImage(){
        return this.image;
    }
    getProductInStock(){
        return this.inStock;
    }
    getId_code(){
        return this.id_code;
    }
    setProductName(new_name){
        this.name = new_name;
    }
    setProductPrice(new_price){
        this.price = new_price;
    }
    setProductCategory(new_category){
        this.category = new_category;
    }
    setProductImage(new_image){
        this.image = new_image;
    }
    setProductWeight(new_weight){
        this.weight = new_weight;
    }
    setProductDescription(new_description){
        this.description = new_description;
    }
}