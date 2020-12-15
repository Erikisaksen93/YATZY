// model
const appDiv = document.getElementById('app');
let scores = [];
let players = [];
let value = 0;
let numbers = [1, 2, 3, 4, 5];
let numberLength = 5;
let diceTurn = 3;
let valueButtons = '';
let savedButton = [];
let diceOutput = '';
let savedNumbers = [];
let playerTurn = 0;
let round = 1;

let testing;

let smallStraight = [1, 2, 3, 4, 5];
let bigStraight = [2, 3, 4, 5, 6];



// controller
function chooseButton(element) {
    element.disabled = true;
    numberLength--;
}


function checkValue(num) {
    savedNumbers.push(num);
    
}

function selectedRound(round, player) {
    switch (round) {

        case 1:
            testing = savedNumbers.filter(function(num) { return num == 1; })
            scores[player][0].ones = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 2: 
            testing = savedNumbers.filter(function(num) { return num == 2; })
            scores[player][0].twos = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 3: 
            testing = savedNumbers.filter(function(num) { return num == 3; })
            scores[player][0].threes = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 4: 
            testing = savedNumbers.filter(function(num) { return num == 4; })
            scores[player][0].fours = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 5: 
            testing = savedNumbers.filter(function(num) { return num == 5; })
            scores[player][0].fives = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 6: 
            testing = savedNumbers.filter(function(num) { return num == 6; })
            scores[player][0].sixes = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 7: 
            scores[player][0].sum = 
            scores[player][0].ones + 
            scores[player][0].twos + 
            scores[player][0].threes + 
            scores[player][0].fours + 
            scores[player][0].fives + 
            scores[player][0].sixes;
        break;
        case 8: 
            if (scores[player][0].sum >=63) {
                scores[player][0].bonus = 25;
            } else { 
                scores[player][0].bonus = 0
            };
        break;
        case 9: 
            testing = savedNumbers;
                if(savedNumbers[0] == savedNumbers[1]) {
                    scores[player][0].onePair = (testing.reduce(function(acc, val) { return acc + val; }, 0));
                } else {
                    scores[player][0].onePair = 0;
                }
        break;        
        case 10: 
            testing = savedNumbers;
                if (savedNumbers[0] == savedNumbers[1] && savedNumbers[2] == savedNumbers[3]) {
                    scores[player][0].twoPair = testing.reduce(function(acc, val) { return acc + val; }, 0);
                } else {
                    scores[player][0].twoPair = 0;
                }
        break;
        case 11: 
            testing = savedNumbers;
            if (savedNumbers[0] == savedNumbers[1] && savedNumbers[2]) {
                scores[player][0].theeAlike = testing.reduce(function(acc, val) { return acc + val; }, 0);
            } else {
                scores[player][0].theeAlike = 0;
            }
        break;
        case 12: 
        testing = savedNumbers;
        if (savedNumbers[0] == savedNumbers[1] && savedNumbers[2] && savedNumbers[3]) {
            scores[player][0].fourAlike = testing.reduce(function(acc, val) { return acc + val; }, 0);
        } else {
            scores[player][0].fourAlike = 0;
        }
        break;
        case 13: 
            testing = savedNumbers;
            testing.sort((a, b) => a - b);
            console.log(testing + 'testing straight array');
            if(testing[0] == smallStraight[0] && 
                testing[1] == smallStraight[1] && 
                testing[2] == smallStraight[2] && 
                testing[3] == smallStraight[3] && 
                testing[4] == smallStraight[4] && 
                testing[5] == smallStraight[5]) 
                { scores[player][0].smallStraight = testing.reduce(function(acc, val) { return acc + val; }, 0);
            } else {scores[player][0].smallStraight = 0; }
        break;
        case 14: 
            testing = savedNumbers;
            testing.sort((a, b) => a - b);
            if(
                testing[0] == bigStraight[0] && 
                testing[1] == bigStraight[1] && 
                testing[2] == bigStraight[2] && 
                testing[3] == bigStraight[3] && 
                testing[4] == bigStraight[4] && 
                testing[5] == bigStraight[5]) {
                scores[player][0].bigStraight = testing.reduce(function(acc, val) { return acc + val; }, 0);
            } else {scores[player][0].bigStraight = 0;}
        break;
        case 15: 
            testing = savedNumbers;
            if (savedNumbers[0] == savedNumbers[1] && savedNumbers[2] == savedNumbers[3] && savedNumbers[2] == savedNumbers[4] || savedNumbers[0] == savedNumbers[1] && savedNumbers[0] == savedNumbers[2] && savedNumbers[3] == savedNumbers[4]) {
                scores[player][0].fullHouse = testing.reduce(function(acc, val) { return acc + val; }, 0);
            } else scores[player][0].fullHouse = 0;
        break;
        case 16: 
            testing = savedNumbers;
            scores[player][0].chance = testing.reduce(function(acc, val) { return acc + val; }, 0);
        break;
        case 17: 
        testing = savedNumbers;
            if (savedNumbers[0] == savedNumbers[1] && savedNumbers[0] == savedNumbers[2] && savedNumbers[0] == savedNumbers[3] && savedNumbers[0] == savedNumbers[4]) {
                scores[player][0].yatzy = 50;
            } else {
                scores[player][0].yatzy = 0;
            }
        break;
        case 18: 
            scores[player][0].totalSum = scores[player][0].sum + 
                                         scores[player][0].bonus + 
                                         scores[player][0].onePair +
                                         scores[player][0].twoPair + 
                                         scores[player][0].theeAlike + 
                                         scores[player][0].fourAlike + 
                                         scores[player][0].smallStraight + 
                                         scores[player][0].bigStraight + 
                                         scores[player][0].fullHouse + 
                                         scores[player][0].chance + 
                                         scores[player][0].yatzy; 
        break;
        default: 
        console.log('error');
        break;
    }
    updateView();
}


function rollDice() {
        if (diceTurn === 3) {
            savedButton = [];
            savedNumbers = [];
        }
        if (diceTurn === 0) {
            diceTurn = 3;
            numberLength = 5;
            selectedRound(round, playerTurn);
            playerTurn++;

            if (playerTurn >= 3) {  
                playerTurn = 0;
                round++;
            }
            updateView();
            return;
        } else {
            numbers = [];
            for (let i = 1; i < 6; i++) {
                randomNums = Math.floor(1 + Math.random() * 6);
                numbers.push(randomNums)
            }
            diceTurn--;
        }
        
        for (let j = 0; j < numberLength; j++) {
            valueButtons += `<button onclick="checkValue(${numbers[j]}); chooseButton(this);" id=button${j}>${numbers[j]}</button><br>`;
        }
        updateView();
        valueButtons = '';
        // console.log('numbers of turns left: ' + diceTurn)
        // console.log(savedNumbers)
};


function mkScore() { 
    for(let i = 0; i < players.length; i++) { 
        
        scores.push(
            [{
            playerName: players[i],
            ones: '',
            twos: '',
            threes: '',
            fours: '',
            fives: '',
            sixes: '',
            sum: '',
            bonus: '',
            onePair: '',
            twoPair: '',
            theeAlike: '',
            fourAlike: '',
            smallStraight: '',
            bigStraight: '',
            fullHouse: '',
            chance: '',
            yatzy: '',
            totalSum: '',
        }])}
    }

function addPlayer(i) {
    players.push(i);
    
}

// view
start();


function start() {
    let playerlisthtml = '';

    
    playerlisthtml += '<ol>';
    for(let i = 0 ; i < players.length; i++) {
        playerlisthtml += '<li>' + players[i] + '</li>';
    }
    playerlisthtml += '</ol>'

    if (players.length < 1) { playerlisthtml = 'Add more players...'}
    appDiv.innerHTML = `
            <div class="left">
                <label>Player name</label>
                <br>
                <input type="text" id="inputField" onkeyup="testingg(event, this.value)">
                <button>Add player</button>
                <br>
                <button class="start" onclick="updateView();">start</button>  
            </div>
            <div class="right">
            <h1>Players:</h1>
                  ${(playerlisthtml)}
            </div>


    `;
}

function testingg(e, b) {
    b = b || '';
    if(b === '') return alert('You need to input a name');
    let key = e.keyCode || e.which;
    if (key == 13) {
        addPlayer(b);
        document.getElementById('inputField').value = '';
        console.log(players);
        start();
    }
}

// const inputField = document.getElementById('inputField');
// console.log(players);
//     inputField.addEventListener('keydown', function(e) {
//         if (e.keyCode === 13) {
//             players.push(inputField.value);
//         }
//     })

function updateView() {
    mkScore();
    savedButton = '';

    if (players.length <= 1 ) return alert('You need 2 or more players'); 

    for (let i = 0; i < savedNumbers.length; i++) {
        savedButton += mkBtn(savedNumbers[i]);
    }
    appDiv.innerHTML = `
                <div class="left">     
                    <table>
                            <th>
                            <td>${scores[0][0].playerName} ${ (playerTurn == 0 ? ' *' : ' ') }</td>
                            <td>${scores[1][0].playerName} ${ (playerTurn == 1 ? ' *' : ' ') }</td>
                            <td>${scores[2][0].playerName} ${ (playerTurn == 2 ? ' *' : ' ') }</td>
                            </th>
                            <tr>
                                <td class="border">One: ${ (round == 1 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].ones}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].ones}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].ones}</td>
                            </tr>
                            <tr>
                                <td class="border">Two:${ (round == 2 ? ' *' : ' ') }</td>
                                <td  style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].twos}</td>
                                <td  style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].twos}</td>
                                <td  style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].twos}</td>
                            </tr>
                            <tr>
                                <td class="border">Three:${ (round == 3 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].threes}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].threes}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].threes}</td>
                            </tr>
                            <tr>
                                <td class="border">Four:${ (round == 4 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].fours}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].fours}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].fours}</td>
                            </tr>
                            <tr>
                                <td class="border">Five:${ (round == 5 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].fives}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].fives}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].fives}</td>
                            </tr>
                            <tr>
                                <td class="border">Six:${ (round == 6 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].sixes}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].sixes}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].sixes}</td>
                            </tr>
                            <tr>
                                <td class="sum">Sum:${ (round == 7 ? ' *' : ' ') }</td>
                                <td class="sum" style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].sum}</td>
                                <td class="sum" style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].sum}</td>
                                <td class="sum" style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].sum}</td>
                            </tr>
                            <tr>
                                <td class="border">Bonus:${ (round == 8 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].bonus}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].bonus}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].bonus}</td>
                            </tr>
                            <tr>
                                <td class="border">One pair:${ (round == 9 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].onePair}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].onePair}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].onePair}</td>
                            </tr>
                            <tr>
                                <td class="border">Two pair:${ (round == 10 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].twoPair}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].twoPair}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].twoPair}</td>
                            </tr>
                            <tr>
                                <td class="border">Three alike:${ (round == 11 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].theeAlike}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].theeAlike}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].theeAlike}</td>
                            </tr>
                            <tr>
                                <td class="border">Four Alike:${ (round == 12 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].fourAlike}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].fourAlike}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].fourAlike}</td>
                            </tr>
                            <tr>
                                <td class="border">Small straight:${ (round == 13 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].smallStraight}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].smallStraight}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].smallStraight}</td>
                            </tr>
                            <tr>
                                <td class="border">Big Straight:${ (round == 14 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].bigStraight}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].bigStraight}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].bigStraight}</td>
                            </tr>
                            <tr>
                                <td class="border">Full house:${ (round == 15 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].fullHouse}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].fullHouse}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].fullHouse}</td>
                            </tr>
                            <tr>
                                <td class="border">Chance:${ (round == 16 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].chance}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].chance}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].chance}</td>
                            </tr>
                            <tr>
                                <td class="border">Yatzy:${ (round == 17 ? ' *' : ' ') }</td>
                                <td style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].yatzy}</td>
                                <td style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].yatzy}</td>
                                <td style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].yatzy}</td>
                            </tr>
                            <tr>
                                <td class="sum">Total sum:${ (round == 18 ? ' *' : ' ') }</td>
                                <td class="sum" style="${ (playerTurn == 0 ? 'background:#CCC' : ' ') }">${scores[0][0].totalSum}</td>
                                <td class="sum" style="${ (playerTurn == 1 ? 'background:#CCC' : ' ') }">${scores[1][0].totalSum}</td>
                                <td class="sum" style="${ (playerTurn == 2 ? 'background:#CCC' : ' ') }">${scores[2][0].totalSum}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="right">
                        <div id="dice">
                            <button onclick="rollDice();">Roll Dice</button>
                        </div>
                        <div id="output">
                            <div class="top">
                                <p>Rolled Dice:</p>
                                <p class="p2">Rolls left: ${diceTurn}</p>
                            </div>
                                <div class="bot">
                                    ${valueButtons}
                                </div>
                        </div>
                        <div id="saved">
                            <div class="top">
                                <p class="p2">Saved Dice:</p>
                            </div>
                            <div class="bot">
                                ${savedButton}
                            </div>
                        </div>
                    </div>
                            `
}

function mkBtn(a) {
    return `<button class="savedBut">${a}</button>`;
}