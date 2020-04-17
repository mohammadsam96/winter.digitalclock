'use strict'


/*************************
 * Snowflake Animation JS
 *************************/


 setInterval(createSnowFlake, 50);

 function createSnowFlake() {
     const snow_flake = document.createElement('i');
     snow_flake.classList.add('fas');
     snow_flake.classList.add('fa-snowflake');
     snow_flake.style.left = Math.random() * window.innerWidth + 'px';
     snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
     snow_flake.style.opacity = Math.random();
     snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

     document.body.appendChild(snow_flake);

     setTimeout(() => {
         snow_flake.remove();
     }, 5000)

 }
 


 /*************************
 * Digital Colck JS
 *************************/
function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormate = 'AM';
    
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    if (hours === 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        timeFormate = 'PM';
    }

    hours = hours < 10 ? '0' + hours : hours;
    minuts = minuts < 10 ? '0' + minuts : minuts;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    let finalDate = `${hours}:${minuts}:${seconds}`;
    let finalCal = `${day}-${month}-${year}`;

    document.getElementById('time').innerText = finalDate;
    document.querySelector('p').innerText = timeFormate;
    document.getElementById('calander-date').innerText = finalCal;

    setInterval(digitalClock, 1000);
}

digitalClock();
