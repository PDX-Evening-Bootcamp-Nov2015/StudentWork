var xmlhttp = new XMLHttpRequest ();
var url = "http://54.68.253.162/StudentWork/api-3.0.json";

xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystagechange = function () {
  if (xmlhttp.status === 200) {
    var quote = JSON.parse(xmlhttp.responseText);
    console.log(quote);
    console.log("test");
  }
}
console.log("test2");
