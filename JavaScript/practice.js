// Performing som operaters inside of a function.

function dosomething(){
    let a = 7;
    var c = 8;
    let product = a * c;
    let sum = a + c;
    let sub = c - a;
    let sup = a**c;
    console.log(product, sum, sub, sup);

}
dosomething();

//Expressions

let b = 5, sum = 15, product = 56;
let expressionVal = 5*b+sum-product;
console.log(expressionVal);

// string concatenation

let first_name = 'Tere Nagendra';
let last_name ='Babu';
let total_name = first_name + '-' + last_name;
console.log(total_name);

//

/*let numberofstringclicks(){
    function clickme(){

    }
}
//////// how to use this function in an object properties.
let name ={
    firstname: "tere",
    lastname: "naga",
    printfullname: function(){
        console.log(this.firstname + " " + this.lastname);

    }
}
name.printfullname();
///// 

let name2 ={
    firstname: "tere",
    lastname: "nagendra",
}
name.printfullname.call(name2);*/


// print the first 50 fib numbers

function fibonacci(){
    let tNth, tNthMinus1=1, tNthMinus2=0;
    console.log(tNthMinus2);
    console.log(tNthMinus1);
    for(let i=0;i<=48;i++){
        tNth = tNthMinus2 + tNthMinus1;
        console.log(tNth);
        tNthMinus2 = tNthMinus1;
        tNthMinus1 = tNth;
    }
}

///// Square of the given number

/*let thenumber = Number(prompt("pick a number"));  // prompt() method is used to display a dialog with an optional message prompting the user to input some text.
if(!Number.isNaN(thenumber)){                       // ! -> logical not ; Number.isNaN is a Number method that checks if a value is NaN (Not A Number).
    console.log("Your number is the square root of " + thenumber * thenumber);  // we are just console logging it.
}
*/
///// multiplication table of 3 using for loops.

function tableofthree(){
    for(let i=1;i<=10;i++){
        console.log('3'+ 'X' + i ,3 * i);
    }
}
tableofthree();

///// multiplication using while loops.

function tableofthreeusingwhile() {
    let i=0;
    while(i<10){
        i++;
        console.log('3'+ 'X' + i ,3 * i);
    }
}
tableofthreeusingwhile();
///// print the type of the data type of each element in an array.

let array = ['a','e',2,4,5,true,false];
for(i=0;i<array.length;i++){
    console.log(array[i] + ' is a data type of ' + typeof(array[i]));
}

///// how to double the element of an give array.

let array1 = [2,4,5,6,7,8,9];
for(i=0;i<array1.length;i++){
    console.log(' double of array1 ' + 2 * array1[i]);
}

///// Add first 10 whole numbers to an empty array using for loops.

let array2 = [];
for(i=0;i<=10;i++){
    array2.push(i);
}

///// Add first 10 whole numbers to an empty array using while loops.

let array3 = [];
let i = 0;
while(i<=10){
    array3.push(i);
    i++;
}

///// sum of all the element of an array 
let array4 = [1,2,3,4,5,55,7,8,9,10];
let sum = 0;
for(let i=0; i<array4.length; i++){
    sum = sum + array4[i];
    //console.log('sum of all the elements of an array4 is ', sum);
}
console.log('sum of all the elements of an array4 is ', sum);


//// sum of the all of even number elements in an array.
let array5 = [1,2,3,4,5,68,7,8,9,10];
let sum1 = 0,sum2 =0;
for(let i=0; i<array5.length; i++){
    if(array5[i]%2 == 0){
        sum1+= array5[i];
    }
    else{
        sum2+= array5[i];
    }
}
console.log('sum of the all of even number elements in an array5 ', sum1);
console.log('sum of the all of odd number elements in an array5 ', sum2);

///// ternary Syntax :- <Condition>?<Statement1>:<Statement2>
(sum1%2==0)?console.log('even'):console.log('odd');
(sum2%2==0)?console.log('even'):console.log('odd');

///////////////////////////////////////////////////////////////////////////////////////////////
///  array methods :
// 1. Array.Concat()

const arr1 = [1,2,3,4,5,6];
const arr = [];
const arr2 = ['naga','tere','babu'];
const arr3 = ['10class','11thclass','b.tech'];
const totalprofile = arr.concat(arr1,arr2,arr3);

// 2. Array.copyWithin()

const fruits = ['mango','strawberry','apple','banana','lichi'];
fruits.copyWithin(2,0,1);

//3. array.entries()

const fruits1 = ['mango','strawberry','apple','banana','lichi'];
const f = fruits1.entries();
for(let x of f){
    console.log(x);
}
//4. array.every()

const ages = [29,49,58,92,44];
ages.every(checkage);
function checkage(age){
    return age > 18;
}
true

const ages1 = [29,49,9,58,92,44];
ages1.every(checkage);
function checkage(age){
    return age > 18;
}
false

//5. Array fill()

const fruits2 = ["Banana", "Orange","lichi","dragon friut", "Apple", "Mango"];
fruits2.fill("Kiwi", 2,5);

/// Answers : ['Banana', 'Orange', 'Kiwi', 'Kiwi', 'Kiwi', 'Mango']

//6. Array Filter()

const num = [28,17,48,50,89,22,345,43,543,4355,345,34,543,543,543,5,345,435,435,43,534,534,5,34,534,5];
const results = num.filter(checkallnum);
function checkallnum(num){
    return num>=18;
}

//7. Array.find() : Find the value of the first element with a value over 18:

const num1 = [28,17,48,50,89,22,345,43,543,4355,345,34,543,543,543,5,345,435,435,43,534,534,5,34,534,5];
const results1 = num1.find(checkallnum);
function checkallnum(num1){
    return num1>=18;
}

//8. Array.findindex() Find the first element with a value over 18:

const num2 = [28,17,48,50,89,22,345,43,543,4355,345,34,543,543,543,5,345,435,435,43,534,534,5,34,534,5];
const results2 = num2.find(checkallnum);
function checkallnum(num2){
    return num2>=18;
}

//9. Array.unshift is the equivalent of push

let array6 = [];
for(let i=0;i<10;i++){
    array6.unshift(i+1);
}

//10. array.pop removes elements from end of an array.

let array6 = [1,2,3,4,5,5,6,7,7,8,89,9,0,0,0,0,0];
for(let i=0;i<10;i++){
    array6.pop(i);
}

//11. array.shit for removing elements from start.

let array7 = [1,2,3,4,5,5,6,7,7,8,89,9,0,0,0,0,0];
for(let i=0;i<10;i++){
    array7.shift(i);
}

//12. array.reverse using this we can reverse an array.

let array8 = [1,2,3,4,5,6,7,8];
let array9 = [];
for(let i=0;i<array8.length;i++){
    array9.unshift(array8[i]);
}

//13. array.indexof() returns the position of a specified value in an array.

const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits3.indexOf("Apple", 3);

//14. array.join() returns an array as a string.

const fruits4 = ['naga', 'tere', 'babu'];
let results3 = fruits4.join('is');

//15. array.map() creates a new array from calling a function for array element.

let numbers1 = [16,49,25,36];
let results4 = numbers1.map(Math.sqrt);

//16. array.prototype method needs to be understood. refer to w3school.com

//17. array.push : adds a new items to an array.

const fruits5 = ['banana','orange','apple','mango'];
fruits5.push('kiwi','dragonfruit');

//18. array.slice returns selected array elements as a new array.

const fruits6 = ['banana','orange','apple','mango'];
fruits6.slice(1,4);

const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits7.slice(-3, -1);

//19. array.splice() method overwrites the original array.(adding or removing).

const fruits8 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits8.splice(1,0,'lemon','kiwi');

//20. array.sort() sorts the elements as strings in alphabetical and ascending order.

const fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits9.sort();

let array10 = [1,2,3,4,5,5,6,7,7,8,89,9,0,0,0,0,0];
array10.sort();

//Functions 

function sayHello(){
    for(let i=0;i<3;i++){
        console.log('hello',i);
    }
}
// call the sayHello()

function sayHelloto(name){
    console.log("Hello",name);
}
// call the sayHelloto()

function sayhellotothepeople(people){
    for(let i=0;i<=people.length;i++){
        console.log("Hello",people[i]);
    }
}
people =['nagendra','mohan','chandra','vinay']
// call the sayhellotopeople(people)

// printing two multiplying tables at  once using function.

function printTwoTables(number1, number2){
    for(let i=0;i<10;i++){
        console.log(number1 + 'X' + i + '=', number1*(i+1), number2 + 'X' + i+ '=', number2*(i+1))
    }
}

// Memorization fuction using higher order function and closuers .

function memoizedAddTo256(){
    var cache = {};

    return function(num){
        if(num in cache){
        console.log("cached value");
        return cache[num]

        }
        else{
        cache[num] = num + 256;
        return cache[num];
        }
    }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

/// array.forEach

function addaverageofanarray(array){
    var total =0;
    var count =0;
    array.forEach((element, index) => {
        total += element;
        count++;
    });
    return total / count;
}

/// Revison class on 11-01-2022

function sum(a,b){
    return a + b;
}
// factorial

function factorial1(num){
    let fact = 1;
    for(let i=1;i<=num;i++){
    fact = fact * i;
    return fact;
}
}
















