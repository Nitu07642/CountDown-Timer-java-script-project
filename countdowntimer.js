


const daydisplay=document.getElementById('day1')
const hourdisplay=document.getElementById('hour1')
const mintdisplay=document.getElementById('mint1')
const seconddisplay=document.getElementById('second1')

const newYear= "16 dec 2025";

function countdown(){
    const newYearDate= new Date(newYear);
    const currentDate= new Date();
    const totalSecond =(newYearDate - currentDate)/1000;

    const days = Math.floor(totalSecond/3600/24);
    const hours = Math.floor(totalSecond/3600)%24;
    const mints= Math.floor(totalSecond/60)%60;
    const seconds= Math.floor(totalSecond)%60;

    daydisplay.innerHTML=days;
    hourdisplay.innerHTML=formatTime(hours);
    mintdisplay.innerHTML=formatTime(mints);
    seconddisplay.innerHTML=formatTime(seconds);
}
function formatTime(time){
    return time<10 ? `0 ${time}` : time;
}
countdown();

setInterval(countdown,1000);











