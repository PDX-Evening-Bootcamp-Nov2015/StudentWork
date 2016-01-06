window.onload = function (){
  pullQuote();
}

function pullQuote (){
var xmlhttp = new XMLHttpRequest ();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    A = document.getElementById('test').innerHTML
    quoteJSON = JSON.parse(xmlhttp.responseText);
    A = quoteJSON.quote;


  }
}
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
