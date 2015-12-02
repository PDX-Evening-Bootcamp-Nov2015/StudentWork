function add(num, num2) {
    return num + num2;
}

console.log(add(3,4))


var subtract = function (num, num2) {
    return num - num2;
};

console.log(substract(7,3));

var num = 5;
if (num <3) {
    console.log("little");
} else if (num === 8) {
    console..log("it's 8")
} else {
    console.log ("else");
}

var person = {
    "name":"Ollie",
    "age": 39,
    "shout": function() {console.log(this.name)}
}

console.log(person.shout());

var list = [1,2,3, "a"]:
console.log(list);

for (var i = 0; i < list.length; i += 1) {
    console.log(list(i));
}
