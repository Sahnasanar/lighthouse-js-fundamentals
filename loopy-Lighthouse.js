var num =100;
while (num<=200) {
  if (num % 3 === 0 && num %4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if(num % 4 === 0) {
    console.log("Lighthouse");
  }
  else if(num % 3 === 0){
    console.log("Loopy");
  }
  else
  {
  console.log(num);
  }
  num++;
}
