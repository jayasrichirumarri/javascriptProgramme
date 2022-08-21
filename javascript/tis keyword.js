let laptop1={
        ram:13,
        cpu:'i5',
        brand:'apple',
        greet:function(){
            console.log(this.ram);
        }

}
let laptop2={
    ram:14,
    cpu:'i7',
    brand:'dell',
    compare:function(other){
        if(this.ram>other.ram)
           console.log(this);
        else
           console.log(other);
    },
    greet:function(){
        console.log(this.ram);
    }
    

}
laptop2.compare(laptop1);