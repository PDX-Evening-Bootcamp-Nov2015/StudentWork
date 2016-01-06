window.onload = function (){
  pullQuote();
}

function pullQuote (){
var xmlhttp = new XMLHttpRequest ();
var quoteDisplay = document.getElementById('quote1');
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    quote2 = JSON.parse(xmlhttp.responseText);
    quoteDisplay = quote2.quote;

  }
}
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
