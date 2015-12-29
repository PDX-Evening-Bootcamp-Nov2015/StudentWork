/*
* open an AJAX GET request for a random quote and log the text of the response.
*/
function getQuote(){
  var request = new XMLHttpRequest();
  request.onload = function () {
    console.log(this.responseText);
    if (request.status === 200) {
      var responseObject = JSON.parse(this.responseText);
      document.getElementById("quote-output").innerText = responseObject.quote;
      document.getElementById("author").innerText = responseObject.author;
    }
  };
  request.open('GET', '../api-3.0.json', true);
  request.send();
}

function getQuoteJSONP() {
  var source = "http://quotesondesign.com/api/3.0/api-3.0.json?callback=loadQuote";
  var injectedScript = document.getElementById("my-injected-script");
  // if the script tag has already been created, update the source
  if (injectedScript !== null) {
    injectedScript.remove();
  }
    var myScript = document.createElement("script");
    myScript.id = "my-injected-script";
    myScript.src = source;
    document.body.appendChild(myScript);
}

function loadQuote(myData) {
  console.log(myData);
  document.getElementById("quote-output").innerText = myData.quote;
  document.getElementById("author").innerText = myData.author;
}

function init() {
  var getQuoteButton = document.getElementById("get-quote-button");
  getQuoteButton.addEventListener("click", getQuote, false);
}

document.addEventListener("DOMContentLoaded", init, false);
