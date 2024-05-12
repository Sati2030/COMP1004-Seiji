let chimba = "cool"; //Initialises a variable
const nokas = 32; //Creates a constant
chimba = nokas; //You can change the type of a variable dynamically
let locas = ["chino","kevin","seiji"]; //Array
let dog = {name: "Kira",breed: "Shiba Inu"}; //object
dog.name; //Access the value of an object

const bird = {type:"halcon"};
bird.type = "colibri"; //You can change the contents of a constant object

//Template literals
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting) //Hello Chris

//Template literal complex example
const song = "Alakran";
const artist = "Feid"
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}, by ${artist}, I gave it a score of ${(score/highestScore) *100}%`;
console.log(output); // I like the song Alakran, by Feid, I gave it a score of 90%

//Template literals can include newlines just how they are
const newLine = `One day you finally knew
what you had to do, and began,`;
console.log(newLine);
/*
One day you finally knew
what you had to do, and began.
 */

//Accessing elements inside the string
const loca = "loca";
loca.length;
loca[0];
loca[loca.length-1]; //Last character of the string
loca.slice(1,3); //oc
let vanca = loca.replace("lo","van"); //vanca (doesn't work in place, you have to assing it)

const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); //20

const random = ["hola",212,2.3,[2,3,4]]; //Can mix different types inside an array
random.push("otra vaina"); //Adds element to the end of the array

random.unshift("primera vaina"); //Adds element to the beggining of the array

random.pop(); //Removes last element
random.shift(); //Removes first element

random.splice(1); //Removes element of index 1

//Filter through array 
function isLong(city) {
    return city.length > 8;
    }
const cities = ["London", "Nottingham", "Liverpool","Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool","Edinburgh" ]

//String into array
const data = "Bogota,Medellin,Cali";
const splitData = data.split(",");
splitData; //["Bogota","Meddellin","Cali"]

//Array to string
const dogNames = ["Kira","Firulais","Bella"];
dogNames.toString(); //"Kira,Firulais,Bella"


const buttons = document.querySelectorAll("button");

for(const button of buttons){
    button.addEventListener("click",createParagraph);
}

document.addEventListener("DOMContentLoaded",() =>{})
/*This is an event listener, which listens for the browser's DOMContentLoaded event,
which signifies that the HTML body is completely loaded and parsed. */



function createParagraph(){
    const para = document.createElement("p");
    para.textContent = "You clicked the Button!";
    document.body.appendChild(para);
}



    