
var i = 0;
var txt = `Be prepare to connect with individuals who share your interests and create strong communities with BunchUp.
Mark your calendars, we'll be launching soon.`;
var speed = 80;

function type() {
    if (i < txt.length) {
      document.getElementById("comming_soon_sub_heading").innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }else{
      document.getElementById("comming_soon_sub_heading").classList.add("blink_cursor")
    }
  }
