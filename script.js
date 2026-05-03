'use strict';

let secterNumber = Math.trunc(Math.random()*50+1);

let score = document.querySelector('.score').textContent = 10 ;
let HigthScore = 0 ;

document.querySelector('.check').addEventListener(
    'click',function(){
        const guess = Number(document.querySelector('.guess').value) ;
        // console.log(guess);
        if(!guess || guess <= 0 || guess > 100){
            document.querySelector('.message').textContent = `Enter Number Between 1 and 50`; 
        }
        else if (guess === secterNumber) {
            document.querySelector('.message').textContent = "Nice Guess :)"
            document.querySelector('body').style.backgroundColor="#60b347";
            document.querySelector('.check').style.display="none";
            document.querySelector('.number').textContent = secterNumber ;
            if(score > HigthScore){
                HigthScore = score ;
            }
            document.querySelector('.highscore').textContent = HigthScore ;
        }
        else if (guess > secterNumber){
            if(score > 1){
                document.querySelector('.message').textContent = "Too Higth 📈"
                score--;
                document.querySelector('.score').textContent = score ;
            }
            else{
                document.querySelector('.mainText').textContent = "Game Over 😢"
                document.querySelector('.check').style.display="none";
                document.querySelector('body').style.backgroundColor="#c73b3b";
            }
            document.querySelector('.guess').value = null ;
        }
        else if (guess < secterNumber){
            if(score > 1){
                document.querySelector('.message').textContent = "Too Low 📈"
                score--;
                document.querySelector('.score').textContent = score ;
            }
            else{
                document.querySelector('.mainText').textContent = "Game Over 😢"
                document.querySelector('.check').style.display="none";
                document.querySelector('body').style.backgroundColor="#c73b3b";
            }
            document.querySelector('.guess').value = null ;
        }
    });

document.querySelector('.again').addEventListener(
    'click',function(){
        score = document.querySelector('.score').textContent = 10 ;
        secterNumber = Math.trunc(Math.random()*20+1);
        document.querySelector('.message').textContent = 'Start guessing...' ;
        document.querySelector('.mainText').textContent = 'Guess My Number!' ;
        document.querySelector('body').style.backgroundColor="#222";
        document.querySelector('.check').style.display="inline-block";
        document.querySelector('.guess').value = null ;
        document.querySelector('.number').textContent = '?' ;
    });