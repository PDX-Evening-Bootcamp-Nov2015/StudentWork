window.onload = function() {
  document.getElementById('newQuote').onclick = randomQuote;
};

function randomQuote(){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://54.68.253.162/StudentWork/api-3.0.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            document.getElementById("demo").innerHTML =
            obj.quote + "<br>" +
            "-"+obj.author;
        };
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };
