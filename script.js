const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


// get hours, minutes, seconds from date
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

// convert hours, minutes, seconds into degrees
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;


function runTheClock() {

  // this removes the second hand "reset to zero" problem
  // clock may fall out of sync with browser throttling because date is not checked
  hrPosition = hrPosition + (3/36);
  minPosition = minPosition + (6/60);
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

};

var interval = setInterval(runTheClock, 1000);