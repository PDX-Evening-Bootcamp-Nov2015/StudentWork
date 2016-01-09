var entries = [];

function renderHtml() {
  $('#entries').html('')
  entries.forEach(function(ent) {
    $('#entries').append('<div>' + ent.gsx$title.$t + '</div><div>' + ent.gsx$bodytext.$t + '</div>');
  });
}

function getEntry() {
  $.ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1_fhQCe0wAmLs0FCOUDn4HZ8eyDq6QHcvQngF7n4e96I/default/public/values?alt=json-in-script',
    dataType: 'jsonp',
    type: 'GET',
    success: function(data) {
      entries = data.feed.entry;
      renderHtml();
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}

function postEntry() {
  var title = $('#title').val();
  var bodytext = $('#bodytext').val();
  $.ajax({
    url: 'https://docs.google.com/forms/d/13VwG7osI2qVSGPTw8Dl2LICxUzAi3DwACfkTW5I1ocM/formResponse',
    data: {
      "entry_1358166143": title,
      "entry_1289920291": bodytext
    },
    type: 'POST',
    dataType: "xml",
    success: getEntry(),
    // error: function(xhr, ajaxOptions, thrownError) {
    //   console.log(xhr.status);
    //   console.log(thrownError);
    //   getEntry()
    // }
  });
}
getEntry();
window.onload = function() {
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault()
    postEntry();
  });

}
