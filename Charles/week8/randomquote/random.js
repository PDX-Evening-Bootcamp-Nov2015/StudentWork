window.onload = function (){
  pullQuote();
  document.getElementById('newQuote').addEventListener('click', pullQuote);
}

function pullQuote (event){
var xmlhttp = new XMLHttpRequest ();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    quoteJSON = JSON.parse(xmlhttp.responseText);
    document.getElementById('quote1').innerHTML = quoteJSON.quote;
    document.getElementById('author').innerHTML = quoteJSON.author;
  }
}
//xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
