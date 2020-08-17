/** Variables */

let player1_positions = new Array(9);
let player2_positions = new Array(9);

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

let playerinfo_h1 = document.getElementById("player-text");

function displayImage(userChoice) {
    if (player1) {
        userChoice.innerHTML = "<img src='images/circle.svg' width='150'/>"; 
    } else {
        userChoice.innerHTML = "<img src='images/cross.svg' width='150'/>"; 
    }
}

function game(userChoice) {

    console.log(userChoice);

    if (player1) {
        if (player1_positions.includes(userChoice) || player2_positions.includes(userChoice)) {
            console.log("choose an empty position.");
            // TODO: display this visually
        } else {
            player1_positions.push(userChoice);
            player1 = !player1;
            playerinfo_h1.innerHTML = "SECOND PLAYER'S TURN!";
            displayImage(userChoice);
        }
    } else {
        if (player1_positions.includes(userChoice) || player2_positions.includes(userChoice)) {
            console.log("choose an empty position.");
                // TODO: display this visually
        } else {
            player2_positions.push(userChoice);
            player1 = !player1;
            playerinfo_h1.innerHTML = "FIRST PLAYER'S TURN!";
            displayImage(userChoice);
        }
    }
}

function main() {
    l1r1_div.addEventListener('click', () => game(l1r1_div));
    l1r2_div.addEventListener('click', () => game(l1r2_div));
    l1r3_div.addEventListener('click', () => game(l1r3_div));

    l2r1_div.addEventListener('click', () => game(l2r1_div));
    l2r2_div.addEventListener('click', () => game(l2r2_div));
    l2r3_div.addEventListener('click', () => game(l2r3_div));

    l3r1_div.addEventListener('click', () => game(l3r1_div));
    l3r2_div.addEventListener('click', () => game(l3r2_div));
    l3r3_div.addEventListener('click', () => game(l3r3_div));
}

main();

