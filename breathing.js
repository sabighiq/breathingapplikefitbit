const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500; //so we set here total time of 7.5s to perform animation & we want this in loop 
const breatheTime = (totalTime / 5) * 2; //brething like for example say taking 7500/5 *2 which is 3000ms or 3s
const holdTime = totalTime / 5; //and this one takes 1.5s so this is holding time

breathAnimation(); //calling breathAnimation 

function breathAnimation() { //here we created breathAnimation function
  text.innerText = 'Breathe In!'; //this tells you to breathe 
  container.className = 'container grow'; //here we just created container.className as container grow

  setTimeout(() => { //this is the setTimeout of breathe 
    text.innerText = 'Hold'; //now this one for hold so basically breathe in breath out between these two we also take break so hold

    setTimeout(() => { 
      text.innerText = 'Breathe Out!'; //this will tell you to breathe out
      container.className = 'container shrink'; //here we just created container's className 
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime); //why we use this line we don't want to use this functionality only once
//we want this to repeat every 7.5s so we use this line & why we use 7.5s because this is the total time we set before

