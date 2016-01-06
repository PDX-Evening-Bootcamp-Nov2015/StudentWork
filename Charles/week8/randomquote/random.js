window.onload = function (){
  pullQuote();
}

function pullQuote (){
var xmlhttp = new XMLHttpRequest ();
var quoteDisplay = document.getElementById('quote');
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    var quote = JSON.parse(xmlhttp.responseText);
    quoteDisplay.innerHTML = quote;
    
  }
}
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
