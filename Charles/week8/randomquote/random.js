window.onload = function (){
  pullQuote();
}

function pullQuote (){
var xmlhttp = new XMLHttpRequest ();
xmlhttp.onreadystatechange = function () {
  var quoteDisplay = document.getElementById('test');
  if (xmlhttp.status === 200) {
    quote2 = JSON.parse(xmlhttp.responseText);
    document.getElementById('test') = quote2.quote;
    console.log(quote2);

  }
}
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
