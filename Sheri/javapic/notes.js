```javascript
 var request = new XMLHttpRequest();
 request.open("GET", "http://www.foo.com");
 request.addEventListener("load", function () {
   console.log(this.responseText);
 })
 request.send(); // sometimes you'll see request.send(null) or request.send(someVar=someValue)
```
