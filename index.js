/** Variables */

let player1_positions = new Array(9);
let player2_positions = new Array(9);

let player1_score = 0;
let player2_score = 0;

let occupied = 0;

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

let player1_score_p = document.getElementById("score-player1");
let player2_score_p = document.getElementById("score-player2");

/** Logic */

/**
 * Displays the image of cross or circle in the selected div.
 * @param {*} userChoice The div that the player chose.
 */
function displayImage(userChoice) {
    if (player1) {
        userChoice.innerHTML = "<img src='images/circle.svg' width='150'/>";
    } else {
        userChoice.innerHTML = "<img src='images/cross.svg' width='150'/>";
    }
}

/**
 * Handles game logic.
 * @param {*} userChoice The div that the player chose.
 */
function game(userChoice) {
    if (player1) {
        if (player1_positions.includes(userChoice) || player2_positions.includes(userChoice)) {
            console.log("choose an empty position.");
            // TODO: display this visually
        } else {
            player1_positions.push(userChoice);
            playerinfo_h1.classList.replace("player1", "player2");
            playerinfo_h1.innerHTML = "<em>SECOND PLAYER'S</em> TURN!";

            let divs = document.querySelectorAll(".game-square");
            divs.forEach(element => { element.classList.replace("active-player1", "active-player2") });

            displayImage(userChoice);
            occupied++;
            checkIfWon();
            checkIfDraw();
            player1 = !player1;
        }
    } else {
        if (player1_positions.includes(userChoice) || player2_positions.includes(userChoice)) {
            console.log("choose an empty position.");
            // TODO: display this visually
        } else {
            player2_positions.push(userChoice);
            playerinfo_h1.classList.replace("player2", "player1");


            let divs = document.querySelectorAll(".game-square");
            divs.forEach(element => { element.classList.replace("active-player2", "active-player1") });

            playerinfo_h1.innerHTML = "<em>FIRST PLAYER'S</em> TURN!";
            displayImage(userChoice);
            occupied++;
            checkIfWon();
            checkIfDraw();
            player1 = !player1;
        }
    }
}

/**
 * Checks if the entire board is filled with no winner.
 */
function checkIfDraw() {
    if (occupied === 9) {
        playerinfo_h1.innerHTML = "IT'S A DRAW";

        setTimeout(() => clearBoard(), 200);
    }
}

function updatePlayer1() {
    player1_score++;
    player1_score_p.innerHTML = player1_score;
}


function updatePlayer2() {
    player2_score++;
    player2_score_p.innerHTML = player2_score;
}

/**
 * Check if the current player won.
 */
function checkIfWon() {
    if (player1) {
        if (player1_positions.includes(l1r1_div) && player1_positions.includes(l1r2_div) && player1_positions.includes(l1r3_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l2r1_div) && player1_positions.includes(l2r2_div) && player1_positions.includes(l2r3_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l3r1_div) && player1_positions.includes(l3r2_div) && player1_positions.includes(l3r3_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l1r1_div) && player1_positions.includes(l2r1_div) && player1_positions.includes(l3r1_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l1r2_div) && player1_positions.includes(l2r2_div) && player1_positions.includes(l3r2_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l1r3_div) && player1_positions.includes(l2r3_div) && player1_positions.includes(l3r3_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l1r1_div) && player1_positions.includes(l2r2_div) && player1_positions.includes(l3r3_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
        if (player1_positions.includes(l1r3_div) && player1_positions.includes(l2r2_div) && player1_positions.includes(l3r1_div)) {
            playerinfo_h1.innerHTML = "FIRST PLAYER WON!"
            updatePlayer1();
            setTimeout(() => clearBoard(), 200);
        }
    } else {
        if (player2_positions.includes(l1r1_div) && player2_positions.includes(l1r2_div) && player2_positions.includes(l1r3_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l2r1_div) && player2_positions.includes(l2r2_div) && player2_positions.includes(l2r3_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l3r1_div) && player2_positions.includes(l3r2_div) && player2_positions.includes(l3r3_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l1r1_div) && player2_positions.includes(l2r1_div) && player2_positions.includes(l3r1_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l1r2_div) && player2_positions.includes(l2r2_div) && player2_positions.includes(l3r2_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l1r3_div) && player2_positions.includes(l2r3_div) && player2_positions.includes(l3r3_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l1r1_div) && player2_positions.includes(l2r2_div) && player2_positions.includes(l3r3_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
        if (player2_positions.includes(l1r3_div) && player2_positions.includes(l2r2_div) && player2_positions.includes(l3r1_div)) {
            playerinfo_h1.innerHTML = "SECOND PLAYER WON!"
            updatePlayer2();
            setTimeout(() => clearBoard(), 200);
        }
    }
}

/**
 * Clears the board, the player positions array and the occupied.
 */
function clearBoard() {
    let divs = document.querySelectorAll(".game-square");
    divs.forEach(element => { element.innerHTML = "" });
    player1_positions = new Array(9);
    player2_positions = new Array(9);
    occupied = 0;
}

/**
 * Main function.
 */
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

