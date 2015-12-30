var hello = function(event) {
  event.preventDefault();
  var text = document.getElementById("new_list_item").value,
      test_changing_me = document.getElementById('test_changing_me'),
      list = document.getElementById("the_list"),
      new_item = document.createElement("li"),
      new_li_id = next_list_item_id();
  console.log("button clicked" + " " + text);

  new_item.innerHTML = text + '<input type=checkbox id="' + new_li_id + '">';
  list.appendChild(new_item);
  new_item.setAttribute('id', new_li_id);


};

var next_list_item_id = function() {
  var counter  = 0;
  return function () {
    counter += 1;
    return ("li_autonumber" + counter);
  }
};

var remove_li = function(li_id) {
  var victim = document.getElementById(li_id);
  victim.parentNode.removeChild(victim);
};

var goodbye = function(event) {
  event.preventDefault();
  var ul = document.getElementById("the_list"),
      first_todo = ul.children[0];
  console.log(first_todo);
  console.log(ul);
  ul.removeChild(first_todo);
};

(function(){

}());
