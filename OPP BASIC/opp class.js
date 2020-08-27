class test {
    
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    sum(){
        return this.x+this.y;
    }
    sub(){
        return this.x-this.y;
    }
}

var math = new test(5,2);

console.log(math.sum())
console.log(math.sub())


class test2 {
    temp=10;
    
    sum(){
        return this.x+this.y;
    }
    sub(){
        return this.x-this.y;
    }
    get_temp(){
        return temp;
    }
}

var math2 = new test2()
console.log(math2.temp)