function Alien(name,tech,exp){
    this.name=name;
    this.tech=tech;
    this.exp=exp;
    this.work=function(){
        console.log(' checking the bugs');

    }
}

let alien1=new Alien('avi','java',3);
let alien2=new Alien('mari','c++',4);
console.log(alien1);
console.log(alien2);
alien1.tech='block chain';
console.log(alien1);
alien2.work();
