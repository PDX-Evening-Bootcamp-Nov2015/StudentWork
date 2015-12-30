/*
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));
*/
var total = 1;

function factorialize(num){
    if (num === 0){
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
console.log(factorialize(5));
