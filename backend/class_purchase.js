class Purchase{
    constructor(purchase_id, id_user, id_product, total_value) {
        this.purchase_id = purchase_id;
        this.id_user = id_user;
        this.id_product = id_product;
        this.total_value = total_value;
    }
    getPurchaseId(){
        return this.purchase_id
    }
    getPurchaseIdProduct(){
        return this.id_product;
    }
    getPurchaseIdUser(){
        return this.id_user;
    }
    getPurchaseTotalValue(){
        return this.total_value;
    }
}