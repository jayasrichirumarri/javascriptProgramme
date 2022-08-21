let map= new Map();
console.log(map);
//adding key and value
map.set('jayasri','js');
map.set('navya','c');
map.set('sai','python');
console.log(map);
//if we want to print all key and values we use for of loop
for(let [k,v] of map){
    console.log(k,':',v);
}