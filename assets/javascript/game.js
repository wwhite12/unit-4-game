
          //document.ready
          $(document).ready(function(){

          //global variables
          let wins = 1;
          let losses = 1;
          let userScore=0;
          gameOver = false;

          //initialize game
          function initializeGame(){
             crystalOne=Math.floor((Math.random() * 12) + 1);
             crystalTwo=Math.floor((Math.random() * 12) + 1);
             crystalThree=Math.floor((Math.random() * 12) + 1);
             crystalFour=Math.floor((Math.random() * 12) + 1);
            ranNum= Math.floor((Math.random() * (120-19+1)) + 19);
            userScore = 0;
            gameOver = false;

            $("#random-score").text(ranNum);
            $("#yourScore").text(userScore);
          } 
          //Generate random number for target score
          //initialize game: reseting numbers-- .text(random)?
          let ranNum = Math.floor((Math.random() * (120-19+1)) + 19);
            $("#random-score").text(ranNum);
          //assign random number to each crystal
            let crystalOne=Math.floor((Math.random() * 12) + 1);
            let crystalTwo=Math.floor((Math.random() * 12) + 1);
            let crystalThree=Math.floor((Math.random() * 12) + 1);
            let crystalFour=Math.floor((Math.random() * 12) + 1);
          //on click function
          $(".cardCrystal").on("click",function(event){
          //targets ID of each picture on click
           const clickID = event.target.id;
           //if statements, numbers added to user score with each click
           if(clickID === "firstCrystal"){
            console.log("first");
            userScore += crystalOne;
            $("#yourScore").text(userScore);
            }
            else if(clickID ==="secondCrystal"){
              console.log("second");
              userScore += crystalTwo;
              $("#yourScore").text(userScore);
            }
            else if(clickID ==="thirdCrystal"){
              console.log("third");
              userScore += crystalThree;
              $("#yourScore").text(userScore);
            }
            else if(clickID ==="fourthCrystal"){
              console.log("fourth");
              userScore += crystalFour;
              $("#yourScore").text(userScore);
            }
            //if statement for win/loss--similar to calc, need to initialize game with exception of wins/losses.
            
            if(userScore === ranNum ){
              console.log("you win");
              $("#winScore").text("Wins: " + wins++);
              alert("you win!");
              initializeGame();
            }
            else if(userScore > ranNum){
              console.log("you lose");
              $("#loseScore").text("Losses: " + losses++);
              alert("You lose");
              initializeGame();
            }


          });

          initializeGame();
            });
          //if: user score === random number-wins++ else if: user score> random number-losses++
      
         
      