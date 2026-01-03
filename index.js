//console.log('Hello');

//window.alert('l like u');

//document.getElementById('myh1').textContent='hello';
//document.getElementById('myp').textContent='i hate u';

//let x = 20;
// console.log(x);
//console.log(`your age is ${x} years old`);
//console.log(typeof x);

//let name='valli';
//console.log(name);
//console.log(`my name is ${name}`);

//let online = true;
//console.log(`bro is online : ${online}`);


//document.getElementById("p1").textContent= `your name is ${name}`;

//let stu = 30;
//stu =stu * 2;
//console.log(stu);

//let name;
//name = window.prompt("What's your name?");

//document.getElementById("mySubmit").onclick = function(){
 //   username = document.getElementById("myText").value;
  //  document.getElementById("h1").textContent = `Hello ${username}`;
//}

/* const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
const cl = document.getElementById("cl");
let count = 0;

inc.onclick = function(){
    count++;
    cl.textContent = count;
}
dec.onclick = function(){
    count--;
    cl.textContent = count;
}

reset.onclick = function(){
    count = 0;
    cl.textContent = count;
} */


   // let randomnum = Math.random();
    //console.log(randomnum);


/* const mybut = document.getElementById("mybut");
const lab1 = document.getElementById("lab1");
const lab2 = document.getElementById("lab2");
const lab3 = document.getElementById("lab3");
const min = 0;
const max = 9;
let ran1;
let ran2;
let ran3;
mybut.onclick = function() {
    ran1 = Math.floor(Math.random() * max) + min;
    ran2 = Math.floor(Math.random() * max) + min;
    ran3 = Math.floor(Math.random() * max) + min;
    lab1.textContent = ran1;
    lab2.textContent = ran2;
    lab3.textContent = ran3;
} */

/* const textbox = document.getElementById("textbox");  
const tofahrenheit = document.getElementById("tofahrenheit");  
const tocelsius = document.getElementById("tocelsius");  
const result = document.getElementById("result");  
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(tocelsius.checked)
    {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "C";
    }else{
        result.textContent = "Select a unit";
    }
}
*/

/* 
function generatepassword(length, low, up ,num, sym){
    const lowcase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const symbol = "!@#$%^&*()_+-=";

    let allow = "";
    let password = "";

    allow += low ? lowcase : "";
    allow += up ? uppercase : "";
    allow += num ? number : "";
    allow += sym ? symbol : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allow.length === 0){
        return `(at least 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
    
        const ran = Math.floor(Math.random() * allow.length);
        password += allow[ran]; 
    }

    return password;
}

const len = 12;
const low = true;
const up = true;
const num = true;
const sym = true;

const password = generatepassword(len, low, up, num, sym); 
console.log(`Generated password: ${password}`);
 */
/*
function update() {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    const timestr = `${hours}:${min}:${sec} ${meridian}`;
    document.getElementById("clock").textContent = timestr;
}

update();
setInterval(update, 1000);

*/


/*
const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsed = 0;
let run = false;

function start() {
    if (!run) {
        starttime = Date.now() - elapsed;
        timer = setInterval(update, 10);  
        run = true;
    }
}

function stop() {
    if (run) {
        clearInterval(timer);
        elapsed = Date.now() - starttime;
        run = false;
    }
}

function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsed = 0;
    run = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const current = Date.now();
    elapsed = current - starttime;

    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let min = Math.floor((elapsed / (1000 * 60)) % 60);
    let sec = Math.floor((elapsed / 1000) % 60);
    let millisec = Math.floor((elapsed % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    min = String(min).padStart(2, '0');
    sec = String(sec).padStart(2, '0');
    millisec = String(millisec).padStart(2, '0');

    display.textContent = `${hours}:${min}:${sec}:${millisec}`;
}
*/

/*
import {pi, getcir, getarea} from './math.js';
console.log(pi);
*/



/*
//Calculator

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
}
 */


/*
const element = document.getElementById("fruits");
const  fc = element.lastElementChild;
fc.style.backgroundColor = "yellow";

const ulele = document.querySelectorAll('ul');
ulele.forEach(ulele => {
    const fc = ulele.firstElementChild;
    fc.style.backgroundColor = "yellow";
});
*/


/*
const newh1 = document.createElement('h1');
newh1.textContent = "i hate pizza";
newh1.id = "myh1";
newh1.style.color = 'tomato';
newh1.style.textAlign = 'center';

document.getElementById('box1').prepend(newh1);

const box4 = document.getElementById("box4");
document.body.insertBefore(newh1, box4);

const box = document.querySelectorAll('.box');
document.body.insertBefore(newh1, box[2]);

document.body.removeChild(newh1);
*/



/** 
const mybutton = document.getElementById("mybutton");
const myimg = document.getElementById("myimg");

mybutton.addEventListener("click", event => {
    if (myimg.style.visibility === "hidden") {
        myimg.style.visibility = "visible";
        mybutton.textContent = "Hide";
    } else {
        myimg.style.visibility = "hidden";
        mybutton.textContent = "Show";
    }
});
*/

/**
// Nodelist

let buttons = document.querySelectorAll(".mybutton");
buttons.forEach(button => {
   button.addEventListener('click', event => {
      event.target.style.backgroundColor = 'pink';
   });
});

buttons.forEach(button => {
   button.addEventListener('mouseover', event => {
      event.target.style.backgroundColor = 'blue';
   });
});

buttons.forEach(button => {
   button.addEventListener('mouseout', event => {
      event.target.style.backgroundColor = 'blueviolet';
   });
});
*/


/** 
const choices = ["rock", "paper", "scissors"]; // Use an array instead of a set {}
const player = document.getElementById('player');
const computer = document.getElementById("computer");
const result = document.getElementById("result");

function play(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let res = "";

    if(playerchoice === computerchoice){
        res = "IT'S A TIE";
    } else {
        switch(playerchoice){
            case "rock":
                res = (computerchoice === "scissors") ? "YOU WIN! 🎉" : "YOU LOSE! 💔";
                break;
            case "paper":
                res = (computerchoice === "rock") ? "YOU WIN! 🎉" : "YOU LOSE! 💔";
                break;
            case "scissors":
                res = (computerchoice === "paper") ? "YOU WIN! 🎉" : "YOU LOSE! 💔";
                break;
        }
    }

    player.textContent = `PLAYER: ${playerchoice.toUpperCase()}`;
    computer.textContent = `COMPUTER: ${computerchoice.toUpperCase()}`;
    result.textContent = res;
}
*/


/*
Fetch - Used for makin http requests to fetch resources.
simplifies asynchronus data fetching in js and used for interacting with 
API's to retrieve and send data asynchronously over the web.
fetch(url, {options})


fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error(error));
*/


/*
fetchData();
async function fetchData(){
    try{
        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if(!response.ok){
            throw new Error("Could not fetch resources");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
    */





//weather App

const weather = document.querySelector(".weather");
const cityinput = document.querySelector(".city");
const card = document.querySelector(".card");
const apikey = "7e1b1ad6b3e37df865f928fb23f29372";

weather.addEventListener("submit", async (event) => { 
    event.preventDefault();
    const city = cityinput.value;
    if (city) {
        try {
            const weatherdata = await getweatherdata(city); 
            displayweatherinfo(weatherdata);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("please enter a city");
    }
});

async function getweatherdata(city) {
   
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayweatherinfo(data) {
   const {name: city, 
          main: {temp, humidity},
          weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";
    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay= document.createElement("p");
    const weatheremoji = document.createElement("p");

    citydisplay.textContent = city;
    tempdisplay.textContent = `${((temp - 273.15)* (9/5) + 32).toFixed(1)}*C`;
    humiditydisplay.textContent = `Humidity: ${humidity}`;
    descdisplay.textContent = description;
    weatheremoji.textContent = getweatheremoji(id);

    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    descdisplay.classList.add("descdisplay");
    weatheremoji.classList.add("weatheremoji");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);
    card.appendChild(weatheremoji);
}

function getweatheremoji(weatherid) {
    switch(true){
        case(weatherid >= 200 && weatherid < 300):
            return "⛈️";
        case(weatherid >= 300 && weatherid < 400):
            return "🌧️";
        case(weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case(weatherid >= 600 && weatherid < 700):
            return "❄️";
        case(weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case(weatherid === 800):
            return "☀️";
        case(weatherid >= 801 && weatherid < 810):
            return "☁️";
        default:
            return "❓"
   }
}

function displayError(message) {
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("errordisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay); 
}
