// OBJECTS 

// Example (Object literal)
const seiji = {
    names: ["Seiji","Sato"],
    age: 21 ,
    bio() {
        console.log(`${this.name[0]}, ${this.names[1]}, ${age}`)
    },
    introduction(){
        onsole.log(`Hello my name is: ${this.name[0]} and im ${age} years old.`)
    }
};
//Accessing
seiji.names;
seiji.bio();
seiji.introduction();

//An object can contain another object inside of it
const hitika = {
    userName: {
        first: "hitika",
        last: "dawani",
    },
};
//Accessing
hitika.userName.first;
hitika.userName.last;

/*Example for using brackets instead of dot
 makes sense as you cant actually pass to a function "person.name"*/
const person = {
    name: ["Bob","Smith"],
    age: 32,
};
function logProperty(propertyName){
    console.log(person[propertyName]);
}
logProperty("mame");
logProperty("age")

//Changing the values of a property
person.age = 45;

//You can create a whole new member
person["eyes"] = "hazel"; //Creates a new member "eyes" and assing it "hazel""
person.farewell = function (){
    console.log("Bye everybody!");
};
person.eyes = "black";

/*Constructor (just a function that returns an object)
 By convention we name the constructors by capital first Person*/
function Person(name){
    obj = {};
    obj.name = name;
    obj.introduction = function() {
        console.log(`Hi, my name is ${this.name}`);
    };
    return obj;
}
const salva = new Person("Salva");
salva.name;
salva.introduction();


//JSON EXAMPLE
const superHeroString = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "members":[
        {
            "nane": "Molecule Man",
            "age": 29,
            "powers": ["Radiation resistance","Turning tiny", "Radiation blast"]
        }
    ]
}`   //This is a JSON

const superHero = JSON.parse(superHeroString);
superHero.squadName;
superHero.members[0].name;

//other way around
let myObj = { name: "Chris", age: 38};
let myString = JSON.stringify(myObj); //Makes an object back into a string







