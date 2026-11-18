const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(fahrenheit);



const add = (a, b) =>{
    return a + b;
}

console.log(add(5,6));


let arr =[1,2,3,4,5];
console.log(arr);

//Map
let newArr = arr.map(value => value * 2);
console.log(newArr);

//Filter
let filteredArr = arr.filter(value => value > 2);
console.log(filteredArr);

//Find
let foundValue = arr.find(value => value > 3);
console.log(foundValue);

//area of rectangle
const area = (a, b) => {
    return a * b;
}
console.log(area(5, 6));


//Even Numbers
let evenNumbers = arr.filter(value => value % 2 === 0);
console.log(evenNumbers);


//Palindrome
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}
let str = "Hello World";
console.log(str.reverse()==str ? "True" : "False");


//object array finder
let objArr = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jack", age: 35}
];

let foundObj = objArr.find(obj => obj.name === "Jane");
console.log(foundObj);


//