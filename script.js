/* 
2a. Create a const variable called jPCharacters and set the value to an object with the following key value pairs (alanGrant: "Sam Neill"), (ellieSattler: "Laura Dern"), and (ianMalcolm: "Jeff Goldblum")
2b. Create an arrow function called seeCharacters. Create the function so that when the function is run only "Laura Dern" will display in the terminal/console. Also, you must run the function and are required to use Destructuring to complete this question (AKA 2b).
*/

const jPDinos = ["Velociraptors", "T-Rex", "Dilophosaurus"]

function seeDinos(a,...b){
    console.log(a);
    console.log(b);
    // console.log(c);
}
seeDinos(...jPDinos);

const jPCharacters = {alangrant: "Sam Neil", ellieSattler: "Laura Dern", ianMalcolm: "Jeff Goldbum"}

let seeCharacters = ({ellieSattler}) =>{ console.log(ellieSattler)};

seeCharacters(jPCharacters);