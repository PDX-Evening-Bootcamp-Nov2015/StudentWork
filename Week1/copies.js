// # id returns the unique integer that represents the "identity" of
// # an element.
//
// var x = 3;
// var y = x; {
// console.log(x, y);
// console.log(x),(y);
// }
// var x = 5;
//
// console.log(x, y)
// console.log((x),(y))

var colors = ["red", "green"];
var colors2 = colors;

// { // this block { ... } is not associated with
// a function so it doesn't help.
    console.log(colors);
    console.log(colors2);
// }
// #
// print(id(colors), id(colors2))
// #
// colors2 = ["orange", "yellow"]
//
// print (colors)
// print (colors2)
//
// print(id(colors), id(colors2))
// #
// colors = ["red", "green"]
// colors2 = colors
//
// colors2[1] = "blue"
//
// print (colors)
// print (colors2)
//
// print(id(colors), id(colors2))
