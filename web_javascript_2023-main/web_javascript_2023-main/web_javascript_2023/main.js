// console.log('Test');

/**
 * Prozeduren
 */

function calcZins() {
  // content of function
  let result = document.getElementById('result');

  let k = document.getElementById('k');
  let p = document.getElementById('p');
  let t = document.getElementById('t');

  let zinsen = (k.value * p.value * t.value) / 36000;
  result.innerHTML = 'This is your result ' + zinsen;
}

// Array erstellen, den ich übergebe - wird eine Konstante sein
const myInts = [1,2,3]; // Konstante mit leerem Array erstellt, dann füllen
const myStrings = ['conny', 'susi'];

for (var i = 0; i <myInts.length; i++) { //counter mit 0 initialisiert, counter wird inkrementiert, solange i kleiner als der array ist
console.log(myInts[i]); // 0 - access zum ersten Element
}

myInts.forEach(item => console.log(item)); // Macht das gleiche wie oben. wie for each funktioniert interessiert mich in dem Fall nicht. Programmschritte interessieren mich nicht. erspare mir komplizierten Code

const doubleArray = myInts.map(item => item*2);
console.log('Double Array' ,doubleArray);
console.log('Initial Array', myInts);

const list = document.getElementById('myNumbers'); // verbindung zu html  Liste
const listStrings = document.getElementById('myStrings');


function addToList(list, item){ // übergebe parameter aus html
  let li = document.createElement('li'); // let von wo kann ich auf die variable zugreifen, li - ist unterelement von ul im html
li.innerHTML = item; // liste ist also innerhalb von html datei. 
list.appendChild(li); // Baumstruktur - html elemente innerhalb html element werden child genannt

}

myInts.forEach(item => addToList(list, item)); // n = ein parameter - kann ihn so nennen wie ich will
myStrings.forEach(item => addToList(listStrings, item)); // ist also wiederverwendbar und austauschbar


function Flight(id, from, to, price) {// Objekt Flight großgeschrieben, wir erstellen ein Objekt mit Eigenschaften
this.from = from; // Formen ein Objekt und legen Eigenschaften fest
this.to = to;
this.id = id;
this.price = price;
} 

let flight1 = new Flight(1, 'Graz', 'Hamburg', 200); // hier objekte erstellen
let flight2 = new Flight(2, 'Graz', 'Wien', 50);

const flights = [flight1, flight2]; // Flight array


function FlightService(){
this.basket = []; // array basket erstellt

this.add = function (id){
this.basket.push(flights[id]); // zu array basket hinzufügen push = etwas hinzufügen zum array
let count = document.getElementById('count'); //span element count aus html
count.innerHTML = this.basket.length; 

}

}

const flightService = new FlightService();

//Error:

try {
 /*for(const i of abc){
    console.log(i)
  }
  test.length;
 */ 
throw Eroor('bla')
console.log('success');

} catch (error) {
  console.log(error);
}
finally {
  console.log('final');
}
console.log('hurra')


