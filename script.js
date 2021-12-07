const clock = document.getElementById("clock");

setInterval(function () {

    let hour = new Date();
    let min = new Date();
    let sec = new Date();

    clock.innerHTML = hour.getHours() + ":" + min.getMinutes() + ":" + sec.getSeconds();

    if(hour < 10){
        hour = "0"+hour;
        console.log(hour)
    }

    if(min < 10){
        min = "0"+min;
    }
  
    if(sec < 10){
        sec = "0"+sec;
        
    }

}, 1000);
