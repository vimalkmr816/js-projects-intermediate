function countdown() {
    const target = new Date("1 Jan 2023 00:00:00").getTime(); //set the target date
    const now = new Date().getTime();
    const gap = target - now;

    //units for conversion of ms to different bases
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    //convert to days, hours, mintues and seconds
    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);

    //update html elements
    document.getElementById('seconds').innerHTML = textSeconds;
    document.getElementById('minutes').innerHTML = textMinutes;
    document.getElementById('hours').innerHTML = textHours;
    document.getElementById('days').innerHTML = textDays;
}

//update the elements every 1000ms(1s) 
setInterval(countdown, 1000);