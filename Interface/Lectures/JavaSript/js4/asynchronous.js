/*Promises
Quite literally like the literal meaning in english, telling the
script that something is going to happen but hasn't yet happened*/

/* Fetch()
allows you to send or receive dat from a server 
therefore they are asynchronous*/

//EXAMPLE OF FETCH() TO ILLUSTRATE PROMISES
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-fata/can-store/products.json",
); //Fetchs returns a promise (may not be there yet)

console.log(fetchPromise); // This could print an empty string

/*When you use .then anything inside it will run after the
promise is completed*/
fetchPromise.then((response) => { 
    console.log(`Received response: ${response.status}`);
});
console.log("Started request ...");

/* Output of the previous:

[object promise] {}
Started request..
Received response: 200 */

/*Sometimes you have to chain promises as data could take 
longer than the actual link to load, lets see an example from the
same fetch that we put previouslly: */

fetchPromise.then((response) => {
    const jsonPromise = response.json(); //Turns string into JSON (a promise in itself)
    jsonPromise.then((data) => {console.log(data[0].name);}); //Exceutes once promise is met
});
//BETTER WAY TO IMPLEMENT
fetchPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].name);
    });

//IMPLEMENTATION WITH ERROR HANDLING
fetchPromise
    .then((response) =>{
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data => {
        console.log(data[0].name);
    }))
    .catch((error) =>{
        console.error(`Could not get products: ${error}`)
    });


//ASYNC FUNCTIONS
/* We can also define functions to handle asynchronous 
actions like the following: */

async function fetchProducts(){
    /*The function will wait for this fetch to occur
    before continuing (using .await)*/
    const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-fata/can-store/products.json");

    if(!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    console.log(data[0].name);
}

fetchProducts();

/* However an assignment will not work:

const promise = fetchProduct();

would not handle the async properly
*/



