
const countDownDate = new Date('July 15, 2021 12:00:00');
const daysCounter = document.querySelector('#days');
const hoursCounter = document.querySelector('#hours');
const minutesCounter = document.querySelector('#minutes');
const secondCounter = document.querySelector('#seconds');
const newDate = document.querySelector('#newDate');


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

    daysCounter.innerHTML = days;
    hoursCounter.innerHTML = hours;
    minutesCounter.innerHTML = minutes;
    secondCounter.innerHTML = seconds;

        if (timeBetween <= 0) {
            countDownDate.setDate(countDownDate.getDate() + 10);
        };
    
        const newDateToString = ` ${countDownDate.toDateString()} 12:00am`;
        newDate.innerHTML = newDateToString;
    
}, 1000);

