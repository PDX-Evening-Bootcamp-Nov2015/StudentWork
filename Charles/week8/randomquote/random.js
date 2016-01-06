window.onload = function (){
  pullQuote();
}

function pullQuote (){
var xmlhttp = new XMLHttpRequest ();

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    var quote = JSON.parse(xmlhttp.responseText);
  }
  return(quote);
}
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}

test = pullQuote();
console.log(test);
