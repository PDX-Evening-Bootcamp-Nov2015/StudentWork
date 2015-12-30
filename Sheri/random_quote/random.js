function apiQuote(){
  //open a new request for a quote
  var request = new XMLHttpRequest();
  request.open("GET", "http://quotesondesign.com/api/3.0/api-3.0.json");
  //parse the response test into an object
  request.addEventListener("load",function(){
    var data = Json.parse(this.responseText);
    console.log(data);
    //grab the quoote text and author
    var quote = data.quote;
    var author =data.author;
    //add it to the DOM
    document.getElementById('quote_div').innerText=quote;
    document.getElementById('author_div').innerText=author;

  })
 }
  // //
  // // apiQuote()
  // // function loadDoc() {
  // //   var xhttp = new XMLHttpRequest();
  // //   xhttp.onreadystatechange = function() {
  // //     if (xhttp.readyState == 4 && xhttp.status == 200) {
  // //      document.getElementById("demo").innerHTML = xhttp.responseText;
  // //     }
  // //   };
  // //   xh.addHeader("Access-Control-Allow-Origin", "*");
  // //   xhttp.open("GET", "http://quotesondesign.com/api/3.0/api-3.0.json", true);
  // //   xhttp.send();
  // //   console.log(xhttp);
  // // }
  // // loadDoc();
  //
  //
  // // function apiQuote(){
  // //   //open a new request for a quote
  // //   var request = new XMLHttpRequest();
  // //   request.open("GET", "http://quotesondesign.com/api/3.0/api-3.0.json");
  // //   //parse the response test into an object
  // //   request.addEventListener("load",function(){
  // //     var data = Json.parse(this.responseText);
  // //     console.log(data);
  // //     //grab the quoote text and author
  // //     var quote = data.quote;
  // //     var author =data.author;
  // //     //add it to the DOM
  // //     document.getElementById('quote_div').innerText=quote;
  // //     document.getElementById('author_div').innerText=author;
  // //   })
  // //
  // // }
  // //
  // // apiQuote()
  // var request = new XMLHttpRequest();
  // request.addHeader("Access-Control-Allow-Origin", "*");
  // request.open('GET', 'http://quotesondesign.com/api/3.0/api-3.0.json', true);
  //
  // request.onload = function() {
  //   if (request.status >= 200 && request.status < 400) {
  //     // Success!
  //     var resp = request.responseText;
  //   } else {
  //     // We reached our target server, but it returned an error
  //
  //   }
  // };
  //
  // request.onerror = function() {
  //   // There was a connection error of some sort
  // };
  //
  // request.send();
