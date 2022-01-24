function countdown() {
    const target = new Date("1 Jan 2023 00:00:00").getTime();
    // console.log(target);
    const now = new Date().getTime();
    const gap = target - now;
    // console.log(gap);

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    // const months= days*

    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);
    // const textSeconds = Math.floor((gap % minutes) / seconds);
    // console.log(textDays);
    // console.log(textHours);
    // console.log(textMinutes);
    // console.log(textSeconds);
    document.getElementById('seconds').innerHTML = textSeconds;
    document.getElementById('minutes').innerHTML = textMinutes;
    document.getElementById('hours').innerHTML = textHours;
    document.getElementById('days').innerHTML = textDays;
    // document.getElementById('months').innerHTML = textSeconds;
}
setInterval(countdown, 1000);