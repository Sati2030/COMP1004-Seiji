const button = document.querySelector("button");
const US = document.getElementById("US");
const UK = document.getElementById("UK");
const nameBox = document.getElementById("nameInput");
let userName = "Bob";
let temperature, weight;
const randoms = ["","",""];

function units(){
    if(US.checked){
        temperature = "90 fahrenheit";
        weight = "300 pounds"
    }
    else if(UK.checked){
        temperature = "32 celsius";
        weight = "136 kilograms";
    }
    else{
        temperature = weight = null;
    }
}

function messages(){
    const characters = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const places = ['the soup kitchen', 'Disneyland', 'the White House'];
    const action = [ 'spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

    function pickRandom(array){
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    randoms[0] = pickRandom(characters);
    randoms[1] = pickRandom(places);
    randoms[2] = pickRandom(action);
}


nameBox.addEventListener("input",() => {if(nameBox.value){userName = nameBox.value;}});



button.addEventListener("click",() => {

    units();

    if(!temperature || !weight){
        alert("You need to choose a unit of measurement!");
        return;
    }

    messages();

    const story = document.getElementById("story");
    story.classList.add("triggered");
    story.textContent = `It was ${temperature} outside, so ${randoms[0]} went for a walk. When they got to ${randoms[1]}, they stared in
    horror for a few moments, then ${randoms[2]}. ${userName} saw the whole thing, but was not surprised — ${randoms[0]}
    weighs 300 pounds, and it was a hot day`;
});