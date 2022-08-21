let map= new Map();
console.log(map);
//adding key and value
map.set('jayasri','js');
map.set('navya','c');
map.set('sai','python');
console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.get('jayasri'));
console.log(map.has('sai'));
console.log(map.has('sa'));

//if we want to print all key and values we use for of loop
for(let [k,v] of map){
    console.log(k,':',v);
}
//foreach loop
map.forEach((k,v)=>{
    console.log(v,':',k);

});

//for in loop
for(let [k,v] in map){
    console.log(v,':',k);
}