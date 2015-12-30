var xmlhttp = new XMLHttpRequest();
var apiUrl = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.status == 200) {
        var dataDump = JSON.parse(xmlhttp.responseText);
        // myFunction(myArr);
    }
};
xmlhttp.open("GET", apiUrl, true);
xmlhttp.send();

document.getElementById("quote").innerHTML = dataDump;
