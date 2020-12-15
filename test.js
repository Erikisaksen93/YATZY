var arr = ["Apple", "Pear", "Mango", "Strawberry", "Apple", "Pear", "Orange"];

var pairs = {}

arr.sort((a,b)=>{
    (a+b in pairs)?pairs[a+b]++:pairs[a+b] = 1;
})

console.log(Object.values(pairs))