const clock = document.getElementById("clock");

setInterval(function () {

    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();


    

    if(hour < 10){
        hour = "0"+hour;
    }

    if(min < 10){
        min = "0"+min;
    }
  
    if(sec < 10){
        sec = "0"+sec; 
    }

    clock.innerHTML = hour + ":" + min + ":" + sec ;

}, 1000);
