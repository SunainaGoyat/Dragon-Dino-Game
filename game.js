score = 0;
cross = true;
audio =  new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(()  => {
    audio.play()

},1000 )


document.onkeydown = function(e){
    console.log("key code is:  ", e.keyCode)
    if(e.keyCode==38){
        pikachu = document.querySelector('.pikachu');
        pikachu.classList.add('animationpikachu');
        setTimeout(() => {
           
            pikachu.classList.remove('animationpikachu')
        }, 700);
    }

if(e.keyCode==39){
    pikachu = document.querySelector('.pikachu');
    pikachuX =  parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('left'));
    pikachu.style.left = pikachuX + 112 + "px";
}

if(e.keyCode==37){
    pikachu = document.querySelector('.pikachu');
    pikachuX =  parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('left'));
    pikachu.style.left = (pikachuX - 112) + "px";
}
}

setInterval(() => {
    pikachu = document.querySelector('.pikachu');
    gameOver = document.querySelector('.gameOver');
    monster = document.querySelector('.monster');
    
    dx  = parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('left'));
    dy  =  parseInt(window.getComputedStyle(pikachu,null).getPropertyValue('top'));
    
    ox  =  parseInt(window.getComputedStyle(monster,null).getPropertyValue('left'));
    oy  =  parseInt(window.getComputedStyle(monster,null).getPropertyValue('top'));


    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
   // console.log(offsetX, offsetY)
    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML= "Game Over - Reload To Play Again"
     
      monster.classList.remove('monsterAni')
      audiogo.play();
      setTimeout(() => {
          audiogo.pause();
          audio.pause();
      }, 1000);
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross: false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(monster, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            monster.style.animationDuration  =  newDur + 's';
            console.log('New animation duration : ', newDur)
        }, 500);
       
    }

},10);
   
function updateScore(score){
    ScoreContainer.innerHTML = " Your Score: " + score;
}