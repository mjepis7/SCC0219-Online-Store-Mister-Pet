class User{
    constructor(name, email, password, phoneNumber, id_code){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.id_code = id_code;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    getId_code(){
        return this.id_code
    }
    setName(new_name){
        this.name = new_name;
    }
    setEmail(new_email){
        this.email = new_email;
    }
    setPassword(new_password){
        this.password = new_password;
    }
}
