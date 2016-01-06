var xmlhttp = new XMLHtppRequest ();
var url = "http://54.68.253.162/StudentWork/api-3.0.json";

xmlhttp.onreadystagechange = function () {
  if (xmlhttp.status === 200) {
    var quote = JSON.parse(xmlhttp.responseText);
    console.log(quote);
  }
}
