let alien={
    name:'jayasri',
    tech:'js',
    work_exp:4,
    laptop:{
        ram:12,
        cpu:"i7",
        brand:'apple'

    }
}
console.log(alien);
console.log(alien.laptop);
console.log(alien.laptop.cpu);
console.log(alien.laptop.cpu.length);
console.log(alien.laptop.brand?.length);
//delete property
delete alien.tech;
console.log(alien);
