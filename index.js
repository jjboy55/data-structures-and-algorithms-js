console.log('hello world');
let personObject = {
    name:'Jerry',
    age: 12,
}

let selectedColors = [blue,red,orange];


console.log(personObject.age,personObject.name);

function greet ({car,food}){
    console.log(`I love ${food} and ${car}`);
}

let a = 'red';
let b = 'black';
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

let hours =  10;
if (hours >= 6 && hours < 12) {
    console.log('Good Morning');
}
else if (hours >= 12 && hours < 18) {
    console.log('Good Afternoon');
}
else console.log('Good evening');

function maximumOfANumber (firstNumber, SecondNumber) {
    if (firstNumber > SecondNumber) {
        console.log(`The maximum of the two numbers is ${firstNumber}`);
        return firstNumber;
    }
    else {
        console.log(`The maximum of the two numbers is ${SecondNumber}`);
        return SecondNumber;
    }
}

maximumOfANumber(101,11);

function isLandScape(width,height) {
    (width > height) ? console.log(true) : console.log(false) ;
}

isLandScape(500,100);

function fizzBuzz(inputParameter) {
    if (typeof input !== 'number')
    return NaN;

    if ((inputParameter % 3 === 0)  && (inputParameter % 5 === 0))
    return 'fizzBuzz';

    if(inputParameter % 3 === 0 )
    return 'fizz';
    
    if (inputParameter % 5 === 0) 
    return 'Buzz';

    if ((inputParameter % 3 !== 0)  && (inputParameter % 5 !== 0))
    return inputParameter;

}

const output = fizzBuzz(40);
console.log(output);


const speedLimit = 70;
const speedPerPoint = 5;

function checkSpeed(speed){
    if (speed < speedLimit){
        console.log('okay');
    } else{
        const points = Math.floor((speed - speedLimit) / speedPerPoint);
        if (points >= 12) {
            console.log('License Suspended');
        }
    }

    
}

const speedChecker = checkSpeed(200);

console.log(speedChecker);

showNumbers(20);

function showNumbers(limit) {
    for (let index = 0; index <= limit; index++) {
        if(index % 2 === 0 ){
            console.log(index,'EVEN');
        }else{
            console.log(index,'ODD');
        }
    }
}
const movie = {
    title: 'a',
    releaseYear: 2019,
    director: 'b',
    rating: 4.5,
}

showProperties(movie);

function showProperties(object){
for (const key in object) {
    if (typeof object[key] === 'number') {
        const element = object[key];
        console.log(key,element);
    }
}
}

console.log(sum(10));

function sum(params) {
    let sum = 0;

    for (let index = 3; index <= params; index++) {
        if (index % 3 === 0 || index % 5 === 0 ) {
           sum = sum + index;
        } 
    }
    return sum;
   
}

const marks = [80,80,50]; 

console.log(calculateGradeMarks(marks));

function calculateGradeMarks(array){
    let sum = 0;
    let averageMarks;
    for (let index = 0; index < array.length; index++)
        sum += array[index];
        averageMarks = sum / array.length;
        if (averageMarks < 60) return 'F';
        if (averageMarks < 70) return 'D';
        if (averageMarks < 80) return 'C';
        if (averageMarks < 90) return 'B';
        return 'A';
    
}
showStars(10);

function showStars(rows) {
   for (let row = 1; row <= rows; row++){
    let star = '';
    for (let index = 0; index < row; index++) {
        star += '*';
    }console.log(star); 
   }
}

let limit = 10;


function showPrimes(value) {
 return ++value;
}

console.log(showPrimes(limit));



function address() {
   return {
    street: 'no 3 obasanjo Street',
    city: 'Lagos Nigeria',
    zipCode: '000555',
}
}

console.log(address());
let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');

function Address(street,city,zipCode){
    street;
    city;
    zipCode;
}
 function areEqual(address1,address2) {
    for (const valuesInadd1 in address1) { 
    for (const valuesInadd2 in address2) 


  console.log(valuesInadd1,valuesInadd2);

 }
}
 console.log(areEqual(address1,address2));

 function areSame(address1,address2){
    return address1 === address2;
 }
 console.log(areSame(address1,address2));


let blogPost = {
    title: 'a',
    body: 'b',
    author: 'jerry',
    views: 100,
    comments: {
        author: 'louis',
        body: 'this is a comment'
    },
    isLive: true,
}

function BlogPost(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = null;
    this.isLive = false;

}

let blogPost1 = new BlogPost('a','c','d');
function PriceRange(food, price )


const numbers = [{id: 1, name:'Node.js'},
{id: 2, name: 'Javascript'},];
const sorted = numbers.sort(function (a,b) {

    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(sorted);

const number2 = [6,7,8,9,10];

const combined = [...numbers,...number2]
console.log(combined);

// const numbers = [{
//     name:'Jeremiah',
//     name2:'Barou',}];

// if(numbers)


// const numbers = [-1,-2,-3,0,1,2,3];
// const filtered = numbers.filter(number => number >= 0);

// const items = filtered.map(value => ({number: value}));

// console.log(items);
// const numbers = [1,2,3,4,5,-1];
// let sum = 0; 

// for( let number of numbers){
//     sum += number;

// }

// console.log(sum);
