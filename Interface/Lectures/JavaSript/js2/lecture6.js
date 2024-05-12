//IF statements
let shoppingDone = false, childsAllowance; // Can define multiple variables in a single line
if(shoppingDone === true){ //The comparison operators are === or !== (considers data type)
    childsAllowance = 10;
}else{
    childsAllowance = 5;
}
//Any value that is not false,undefined,null,0,NaN or "": is considered true
//AND and OR operators are the same as java

//Ternary operator
let isBirthday = false;
const greeting = isBirthday
    ? "Happy birthday Mrs. Smith - we hope yuo have a great day!"
    : "Good Morning Mrs. Smith";

/*The value for greeting depends on "isBirthday", is isBirthday is true then
 the value following the ? would be returned, else the value following the : will be returned*/


//Loops
let ciudades = ["Bogotá","Medellin","Cali"];
for(const ciudad of ciudades) //same as in java for(ciudad : ciudades)
    {
        console.log(ciudad);
    }

//Functions
function myFunction(){
    alert("Hello"); //Pop up a window with this text
}

myFunction();

//Anonymous functions
(function(){
    alert("hello");
})//Could be used to be passed into another function as a parameter
 
//Example with eventListener

textBox.addEventListener("keydown", function(event){
    console.log(`You pressed "${event.key}".`);
}); //This declared an passed a function to eventListener (the anonymous function will occur when event is triggered)

//Could also work like the following 

function hola(){
    console.log("Hola");
}

textBox.addEventListener("keydown",hola); //Executes the hola function when triggered


//Arrow functions

textBox.addEventListener("keydown", (event) =>{
    console.log(`You pressed "${event.key}"`);
}); //Similar to Lambda

const originals = [1,2,3];
const doubled = originals.map(item => item * 2) //Map function takes a functino as parameter

//Same as 
function doubleItem(item){
    return item * 2;
}

//Events example

//html: <button>Change color</button>

const btn = document.querySelector("button"); 
//Selects buttons, if there are multiples it returns an array of all buttons

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click",() => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
})

//You can also do removeEventListener 

//Event objects
function bgChange(e){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
} // The "e" is the event object (for example the button that triggered the event)
// e.target refers to the button itself (can have many properties)

btn.addEventListener("click",bgChange);