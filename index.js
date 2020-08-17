/** Variables */

let player1_positions = [];
let player2_positions = [];

let player1 = true; // which player is currently playing

/** DOM variables */

let l1r1_div = document.getElementById("l1r1");
let l1r2_div = document.getElementById("l1r2");
let l1r3_div = document.getElementById("l1r3");
let l2r1_div = document.getElementById("l2r1");
let l2r2_div = document.getElementById("l2r2");
let l2r3_div = document.getElementById("l2r3");
let l3r1_div = document.getElementById("l3r1");
let l3r2_div = document.getElementById("l3r2");
let l3r3_div = document.getElementById("l3r3");

function game(userChoice) {

    console.log("userChoice");

}

function main() {
    l1r1_div.addEventListener('click', () => game(11));
    l1r2_div.addEventListener('click', () => game(12));
    l1r3_div.addEventListener('click', () => game(13));

    l2r1_div.addEventListener('click', () => game(21));
    l2r2_div.addEventListener('click', () => game(22));
    l2r3_div.addEventListener('click', () => game(23));

    
    l3r1_div.addEventListener('click', () => game(31));
    l3r2_div.addEventListener('click', () => game(32));
    l3r3_div.addEventListener('click', () => game(33));
}

main();

