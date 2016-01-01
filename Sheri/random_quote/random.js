//window.onload event listener

function apiQuote(){
  //open a new request for a quote
  var request = new XMLHttpRequest();
  request.open("GET", "../../api-3.0.json");
  //parse the response test into an object
  request.addEventListener("load",function(){
    var data = JSON.parse(this.responseText);
    console.log(data);
    //grab the quoote text and author
    var quote = data.quote;
    var author =data.author;
    //add it to the DOM
    document.getElementById('quote_div').innerText=quote;
    document.getElementById('author_div').innerText=author;

  })
  request.send();
 }

 window.onload = function() {
   //listener for new button
     document.getElementById("new").addEventListener("click", function() {
     apiQuote();
   });
 };
