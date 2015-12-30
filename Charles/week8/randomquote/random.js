var xmlhttp = new XMLHttpRequest();
var apiUrl = "http://quotesondesign.com/api/3.0/api-3.0.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.status == 200) {
        var apiDump = JSON.parse(xmlhttp.responseText);
    }
    console.log(apiDump);
};
xmlhttp.open("GET", apiUrl, true);
xmlhttp.send();

document.getElementById("quote").innerHTML = apiDump;
