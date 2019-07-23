
          //document.ready
          $(document).ready(function(){

          //global variables
          let wins = 1;
          let losses = 1;
          let userScore=0;
          gameOver = false;

          //initialize game
          function initializeGame(){
            var crystalOne=Math.floor((Math.random() * 10) + 1);
            var crystalTwo=Math.floor((Math.random() * 10) + 1);
            var crystalThree=Math.floor((Math.random() * 10) + 1);
            var crystalFour=Math.floor((Math.random() * 10) + 1);
            var ranNum= Math.floor((Math.random() * 50) + 1);
            gameOver = false;
          }
          //Generate random number for target score
          //initialize game: reseting numbers-- .text(random)?
          let ranNum = Math.floor((Math.random() * 50) + 1);
            $("#random-score").text(ranNum);
          //assign random number to each crystal
            let crystalOne=Math.floor((Math.random() * 10) + 1);
            let crystalTwo=Math.floor((Math.random() * 10) + 1);
            let crystalThree=Math.floor((Math.random() * 10) + 1);
            let crystalFour=Math.floor((Math.random() * 10) + 1);
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
            //if statement for win/loss--similar to calc, need to initialize game with exception of wins.losses.
            gameOver=true;
            if(userScore === ranNum ){
              console.log("you win");
              $("#winScore").text("Wins: " + wins++);
              //return false;
            }
            else if(userScore > ranNum){
              console.log("you lose");
              $("#loseScore").text("Losses: " + losses++);
              //return false;
            }


          });
            });
          //if: user score === random number-wins++ else if: user score> random number-losses++
      
         
      