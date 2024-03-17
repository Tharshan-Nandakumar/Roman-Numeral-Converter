const number = document.getElementById('number');
const convert = document.getElementById('convert-btn');
const output = document.getElementById('output');
const checkInput = () => {
  if (number.value==="") {
    output.innerHTML="Please enter a valid number";
    return;
  } else if (number.value<1) {
    output.innerHTML="Please enter a number greater than or equal to 1";
    return;
  } else if (number.value>=4000) {
      output.innerHTML="Please enter a number less than or equal to 3999";
      return;
    }
    arabicToRoman(number.value);
  }
convert.addEventListener("click",checkInput);
const arabicToRoman = (input) => {
  output.innerHTML="";
  while (input>=1000) {
    output.innerHTML+="M";
    input-=1000;
  }
  if (input>=900) {
    output.innerHTML+="CM";
    input-=900;
  }
  if (input>=500) {
    output.innerHTML+="D";
    input-=500;
  }
  if (input>=400) {
    output.innerHTML+="CD";
    input-=500;
  }
  while (input>=100) {
    output.innerHTML+="C";
    input-=100;
  }
  if (input>=90) {
    output.innerHTML+="XC";
    input-=90;
  }
  if (input>=50) {
    output.innerHTML+="L";
    input-=50;
  }
  if (input>=40) {
    output.innerHTML+="XL";
    input-=40;
  }
  while (input>=10) {
    output.innerHTML+="X";
    input-=10;
  }
  if (input>=9) {
    output.innerHTML+="IX";
    input-=9;
  }
  if (input>=5) {
    output.innerHTML+="V";
    input-=5;
  }
  if (input>=4) {
    output.innerHTML+="IX";
    input-=4;
  }
  while (input>=1) {
    output.innerHTML+="I";
    input-=1;
  }
    number.value="";
}
number.addEventListener ("keydown", (e)=>{
  if (e.key === "Enter") {
    checkInput();
  }
});