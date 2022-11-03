body = document.querySelector("body");
url = 'https://source.unsplash.com/'+String(window.innerWidth)+"x"+String(window.innerHeight)+'/?productivity,city,time,landscape'
body.style.backgroundImage = "url("+url+")"
timee = document.getElementById("timee");


function conv(day){

  switch (day) {
    case 0:
      d_ = "Sunday";
      break;
    case 1:
      d_ = "Monday";
      break;
    case 2:
      d_ = "Tuesday";
      break;
    case 3:
      d_ = "Wednesday";
      break;
    case 4:
      d_ = "Thursday";
      break;
    case 5:
      d_= "Friday";
      break;
    default:
    d_ = "Saturday";
  }
  return d_;
}


setInterval(function update(){
  timee = document.getElementById("timee");
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  divas = conv(d.getDay());
  aaa = document.getElementById("diw");
  aaa.innerHTML=divas;
  if (h<10){
    h = "0"+h;
  }
  if (m<10){
    m = "0"+m;
  }
  if (s<10){
    s = "0"+s;
  }
  today = d.toISOString().slice(0, 10);
  dayyy = document.getElementById("days");
  dayyy.innerHTML = today;
  //console.log(h);
  time = " "+h + " : " + m + " : " + s+ " ";
  //console.log(time);
  timee.innerHTML = time;
}, 1000);
