
var i = 0;
var txt = `Be prepared to connect with random people who share same interests and have fun together. So what are you waiting for mark your calendars, We’ll be launching soon…`;
var speed = 150;

function type() {
    if (i < txt.length) {
      document.getElementById("coming_soon_sub_heading").innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }else{
      document.getElementById("coming_soon_sub_heading").classList.add("blink_cursor")
    }
  }

  function nav_bar(x) {
    x.classList.toggle("change");
    const width = document.getElementById('sidebar').style.width;
    if(width !='0px'){
      document.getElementById('sidebar').style.width = '0px';
      document.getElementById('content_container').style.display = 'block'
      document.getElementById('sidebar').style.display = 'none';

    }else{
      
      document.getElementById('sidebar').style.display = 'block';
      document.getElementById('sidebar').style.width = '200px';
      document.getElementById('content_container').style.display = 'none';
    }
  } 