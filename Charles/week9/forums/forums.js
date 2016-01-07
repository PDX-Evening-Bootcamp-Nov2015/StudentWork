window.onload = function (){
  pullQuote();
  // document.getElementById('newQuote').addEventListener('click', pullQuote);
}

function pullQuote (event){
var xmlhttp = new XMLHttpRequest ();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status === 200) {
    quoteJSON = JSON.parse(xmlhttp.responseText);
    console.log(quoteJSON);
  }
}
xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1_fhQCe0wAmLs0FCOUDn4HZ8eyDq6QHcvQngF7n4e96I/default/public/values?alt=json-in-script", true);
xmlhttp.send();
}
