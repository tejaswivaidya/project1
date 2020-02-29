/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, activePlayer, roundScore, gamePlaying;
init();
document.querySelector('.btn-new').addEventListener('click',init)//to initialize the score 
function init(){
    score = [0,0],
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#current-0').textContent = '0';

    document.querySelector('#current-1').textContent = '0';

    document.querySelector('#score-0').textContent = '0';

    document.querySelector('#score-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player1';

    document.querySelector('#name-1').textContent = 'Player2';

    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click',() =>{

    if(gamePlaying){
    var randomNumber = Math.floor(Math.random()* 6) + 1;

    console.log(randomNumber);

    var dice = document.querySelector('.dice');

    dice.style.display = 'block';

    dice.src = 'dice-' + randomNumber + '.png';

    if(randomNumber != 1){

        roundScore += randomNumber;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }else{

        nextPlayer();
    }
    }

 
})
// else we can use activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
function nextPlayer(){
    console.log('test')
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';

    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display= 'none';
}

document.querySelector(".btn-hold").addEventListener('click',() =>{

    if(gamePlaying){
        score[activePlayer] += roundScore;
        document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];

        if(score[activePlayer] >= 20){

            document.querySelector("#name-"+activePlayer).textContent="winner";
            document.querySelector(".dice").style.display="none";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            gamePlaying = false;
            
        }
        else{
            nextPlayer();
        }


        
    }
})