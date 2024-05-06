class Car {
    constructor(name){
        this.name = name;
    }
    present(){
        return "this is the" + this.name;
    }

}


class Mine extends Car{
    constructor(name , model){
        super(name);
        this.model = model;
    }
    show(){
        return this.present() + this.model;
    }
}
