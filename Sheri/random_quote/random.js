
//function that requests the api
function apiQuote() {
  //new request for a quote. key word new. I forgot that at first. Again.
  var request = new XMLHttpRequest();
  //requests from the api address.
  request.open("GET", "../../api-3.0.json");
  //load the response into the destinations
  request.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);
    //console.log(data);
    //get the values using the keys
    var quote = data.quote;
    var author = data.author;
    //insert into the assigned divs
    document.getElementById('quote_div').innerText = quote;
    document.getElementById('author_div').innerText = author;

  })
 //call the function
  request.send();
}
//the listener 
window.onload = function() {
  //listener for new button
  document.getElementById("new").addEventListener("click", function() {
    apiQuote();
  });
};
