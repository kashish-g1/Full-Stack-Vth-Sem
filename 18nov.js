/* console.log("Closures - Memoization");
function add(fn){
    let obj = {};
    return function (x,y)
    {
        let key = `x,y`;
        if (obj.hasOwnProperty(key)){
            console.log("from cache");
            return obj[key];
        }

        let res = fn (x,y);
        obj[key] = res;
        return obj[key];
    }
}
const myAdd = add((x,y) =>{
    return x+y;
}
);
console.log(myAdd(1,2));
console.log(myAdd(1,2));

*/

// Factorial using memoization

/*

console.log("Factorial - Memoization");
function factorial(fn) {
    let obj = {};
  return function (n) {
        if (obj.hasOwnProperty(n)) {
            console.log("from Cache");
            return obj[n];
        }
        let res = fn(n);
        obj[n] = res;
        return res;
    };
}

const myFact = factorial((n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * myFact(n - 1);
});

console.log(myFact(5)); // 120
console.log(myFact(5)); // from Cache -> 120
console.log(myFact(4)); // from Cache -> 24

*/


// Prototypes

/*

let obj = {};
console.log(obj.name);

let str = "Hello";
console.log(str.__proto__);

let myObj = Object.create(obj);

console.log(myObj.location); //undefined

*/


//Promises

let res = new Promise ((resolve,reject) => {
    setTimeInterval(()=>{
        return resolve("Promise Kept");
    },1000);
});

res.then((msg)=>{
    console.log(msg);
}).catch ((err)=>{
    console.log(err);
}).finally(()=>{
    console.log(" completed ");
})

