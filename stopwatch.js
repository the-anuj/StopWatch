let [hours,minutes,second]=[0,0,0];
let displayTime=document.getElementById("display-time");
let timer=null;

function stopWatch(){
  second++;
  if(second==60){
    second=0;
    minutes++;
    if(minutes==60){
      minutes=0;
      hours++;
    }
  }
  let h = hours<10 ? "0"+hours:hours;
  let m= minutes<10 ? "0"+minutes:minutes;
  let s= second<10 ? "0"+second:second;
  
  displayTime.innerHTML = h +":"+ m +":"+ s;
}
function watchStart(){
  if(timer !== null){
    clearInterval(timer);
  }
  timer=setInterval(stopWatch,1000);
}

function watchStop(){
  clearInterval(timer);
}

function watchReset(){
  clearInterval(timer);
  [hours,minutes,second]=[0,0,0];
  displayTime.innerHTML= "00:00:00";
}