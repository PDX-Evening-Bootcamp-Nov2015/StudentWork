function sleep_in(weekday, vacation) {
  if (weekday && !vacation){
    return false;
  }
  return true
}

console.log(sleep_in(false, false)); //true
console.log(sleep_in(true, false)); //false
console.log(sleep_in(false, true)); //true
console.log(sleep_in(true, true)); //true

function hello(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return ("Hello " + str + "!");
}


console.log(hello("Skip"));
console.log(hello("garreT"));
console.log(hello("oLlIE"));
