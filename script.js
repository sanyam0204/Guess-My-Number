'use strict';
let secret=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage= function (message)
{
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function() {
  const guess= Number(document.querySelector('.guess').value);

  if(score>1)
  {
    if(!guess)
    {
      displayMessage('No Number');
    }
    else if(guess===secret)
    {
      displayMessage('Wohoo Correct Answer');
      document.querySelector('.number').textContent=secret;
      document.querySelector('.number').style.width='30rm';
      /*document.querySelector('.number').style.fontSize='8rem';*/
      document.querySelector('body').style.backgroundColor='#60b347';
      score--;
      if(score>highscore)
      {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
      }
    }
    else if(guess>secret)
    {
      displayMessage('Neeche aao');
      score--;
    }
    else
    {
      displayMessage('Upr jao');
      score--;
    }
    document.querySelector('.score').textContent=score;
  }
  else
  {
    displayMessage('Lost Game');
  }
});

document.querySelector('.again').addEventListener('click', function() {
  secret=Math.trunc(Math.random()*20)+1;
  score=20;
  document.querySelector('.score').textContent=score;
  displayMessage('Start Guessing....');
  document.querySelector('.guess').value='';
  document.querySelector('.number').textContent='?';
  document.querySelector('.number').style.width='15rm';
  document.querySelector('body').style.backgroundColor='#222';
})