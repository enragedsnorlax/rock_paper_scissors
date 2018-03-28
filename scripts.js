    playerScore = 0;
    computerScore = 0;

    function computerPlay(){
      let randomNumber = Math.floor(Math.random()*3 );
      if (randomNumber === 0){
        return "rock"
      }else if(randomNumber === 1){ 
        return "paper"
      }else{
        return "scissors"
      }
          }
          let computerSelection = computerPlay();
    function playRound(playerSelection, computerSelection){;
      if (((computerSelection == "rock") && (playerSelection == "scissors")) || ((computerSelection == "paper") && (playerSelection == "rock")) || ((computerSelection == "scissors") && (playerSelection == "paper"))){
        		computerScore++;
            document.querySelector('#computer-score').textContent = computerScore;
        		outcome.textContent = "Computer Wins";
      }else if (computerSelection == playerSelection){
        		outcome.textContent = "It's a tie";
      }else if (((computerSelection == "rock") && (playerSelection == "paper")) || ((computerSelection == "paper") && (playerSelection == "scissors")) || ((computerSelection == "scissors") && (playerSelection == "rock")))
      {
        		playerScore++;
            document.querySelector('#player-score').textContent = playerScore;
        		outcome.textContent = "You win!";
 }
}
        function game(playerSelection){
          if(playerScore < 5 && computerScore < 5){
              const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            computerMove.textContent = "Computer chooses " + computerSelection;
            playerMove.textContent = "Player Chooses " + playerSelection;
            }else if(playerScore === 5 || computerScore === 5){
              playerMove.textContent = "Game over";
              computerMove.textContent = "Reset to try again"
            }
          }
 
            let btn1 = document.querySelector('#btn1');
        btn1.addEventListener('click', function(){
          game("rock");
        })
            let btn2 = document.querySelector('#btn2');
        btn2.addEventListener('click', function(){
          game("paper");
        })
            let btn3 = document.querySelector('#btn3');
        btn3.addEventListener('click', function(){
          game("scissors");
        })
          document.querySelector('#reset').addEventListener('click', ()=>{
          playerScore = 0;
          computerScore = 0;
          document.querySelector('#player-score').textContent = playerScore;
          document.querySelector('#computer-score').textContent = computerScore;
          playerMove.textContent = "Click your choice";
          computerMove.textContent = "to play";
          outcome.textContent = "Rock, paper, scissors";
});
 


    	
