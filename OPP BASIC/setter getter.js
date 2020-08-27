class Student{
    constructor(id){
        this.id = id;
    }
    set id(id){
        if (toString(id).lenght >4){
            alter("Id is too long");
        }
        this._id = id;
    }

    get id(){
        return this._id;
    }

}

let Ashik = new Student(2408);

console.log(Ashik.id);