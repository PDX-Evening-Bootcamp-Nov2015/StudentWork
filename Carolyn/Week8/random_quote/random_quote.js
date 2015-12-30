window.onload = function(){
    var xmlhttp = new XMLHttpRequest();
    var url = "nrs.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            document.getElementById("demo").innerHTML =
            obj.name + "<br>" +
            obj.street + "<br>" +
            obj.phone;
        };
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };
