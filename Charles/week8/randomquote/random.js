window.onload = function (){
  pullQuote();
}

function pullQuote (){
var xmlhttp = new XMLHttpRequest ();
var quoteDisplay = document.getElementById('test');
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    quoteDisplay.innerHTML = JSON.parse(xmlhttp.responseText);

  }
}
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
