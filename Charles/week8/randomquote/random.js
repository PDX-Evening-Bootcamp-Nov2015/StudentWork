getaquote();

function getaquote () {
  var test = new XMLHttpRequest ();
  if (XMLHttp.status === 200){
    test.open("get", `../api-3.0.json`, true);
    test.send(null);
    console.log("test");
  }
}
