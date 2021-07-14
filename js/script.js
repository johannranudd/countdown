const demo = document.querySelector('#demo');

const countDownDate = new Date('July 24, 2021 15:37:25');
const daysCounter = document.querySelector('#days');
const hoursCounter = document.querySelector('#hours');
const minutesCounter = document.querySelector('#minutes');
const secondCounter = document.querySelector('#seconds');


let countdown = setInterval(function() {
    const now = new Date().getTime();

    const timeBetween = countDownDate - now;

    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeBetween % (1000 * 60 * 60 * 24) / 
    (1000 * 60 * 60));
    const minutes = Math.floor(timeBetween % (1000 * 60 * 60) / 
    (1000 * 60));
    const seconds = Math.floor(timeBetween % (1000 * 60) / 
    (1000));
    
    // console.log(seconds);
    daysCounter.innerHTML = days;
    hoursCounter.innerHTML = hours;
    minutesCounter.innerHTML = minutes;
    secondCounter.innerHTML = seconds;

}, 1000);




