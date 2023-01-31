let count = 0;
let screenval = 0;
let calcval = 0;
let numflag = 0;
let actflag = 0;
function myfunction(value) {
  if (value == "DEL" || value == "Backspace") {
    let Last = screenval.substring(0, screenval.length - 1);
    screenval = Last;
    count += 1;
    document.getElementById("screenlcd").innerHTML = screenval;
  } else if (value == "C") {
    screenval = 0;
    count += 1;
    document.getElementById("screenlcd").innerHTML = screenval;
  } else if (value == "=" || value == "Enter"){
    if(count ==0 && actflag == 0){
      alert('there is nothing to equal to');
    }
    screenval = calcval;
    count+=1;
    document.getElementById("screenlcd").innerHTML = screenval;
  }
  else {
    actflag = 1;
    let val = value;
    if(isNaN(val) && numflag  ==0){
      alert("you can't add the symbol without the number");
    }
    
    if (count == 0) {
      screenval = val;
    }
    else {
      screenval += val;
    }
    if(!isNaN(val)){
      calcval = +val;
    }
    else{
      if(val == "/"){
        
      }
    }
    count += 1;
    document.getElementById("screenlcd").innerHTML = screenval;
  }

}