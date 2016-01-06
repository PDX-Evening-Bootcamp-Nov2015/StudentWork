window.onload = function (){
  pullQuote();
}



function pullQuote (){
var xmlhttp = new XMLHttpRequest ();
var url = "http://54.68.253.162/StudentWork/api-3.0.json";

xmlhttp.onreadystagechange = function () {
  if (xmlhttp.status === 200) {
    var quote = JSON.parse(xmlhttp.responseText);
    console.log(xmlhttp.responseText);
  }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
console.log("fetched!");

}
