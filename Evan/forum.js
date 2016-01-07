// requires jQuery
$(function () {
    // sends new post data entered by the user to the Google spreadsheet
    function sendNewPost(evt) {
      "use strict";
      evt.preventDefault();
      var $form = evt.data.$form;
      var title = $form.find('#new-post-title').val();
      var bodytext = $form.find('#new-post-body').val();
      $.ajax({
        url: "https://docs.google.com/forms/d/13VwG7osI2qVSGPTw8Dl2LICxUzAi3DwACfkTW5I1ocM/formResponse",
        method: "POST",
        dataType: "xml",
        data: {
          "entry_1358166143": title,
          "entry_1289920291": bodytext
        }
      });
      // .done(function (response) {
      //   console.log("post request successful");
      //   var postObj = {title: title, bodytext: bodytext};
      //   addPost($postList, postObj);
      // })
      // .fail(function (response) {
      //   console.log(response);
      //   console.log("error during post request");
      // })
      // .always(function () {
      //   console.log("post completed");
      // });
    }
    // takes the text content of a post and returns it as an object
    function parsePostObject(postString) {
      "use strict";
      // remove 'title: ' from the beginning of the string
      postString = postString.substring(7);
      // split on ', bodytext' to get an array of the fields as strings
      var fields = postString.split(', bodytext: ');
      var titleField = fields[0];
      var bodyField = fields[1];
      return {
        title: titleField,
        bodytext: bodyField
      };
    }
    /**
    * Adds a post to the list of posts on the page
    * @param {HTMLElement} $list A jQuery reference to the post list (div)
    * @param {object} post A post with `title` and `bodytext` properties
    */
    function addPost($list, post) {
      "use strict";
      console.log("adding new post in list");
      $list.append("<div class='post'><h3>" + post.title + "</h3>" + "<p>" + post.bodytext + "</p></div>");
    }
    /**
    * Loads post data from Google onto the page
    * @param {HTMLElement} $list A jQuery reference to the post list (div)
    * @param {object} posts The array of entry data returned by Google
    */
    function loadPostList($list, posts) {
      "use strict";
      $list.find('#loading').remove();
      for (var i = 0; i < posts.length; i++) {
        var post = posts[i].content.$t;
        var postObj = parsePostObject(post);
        console.log("postObj: ", postObj);
        addPost($list, postObj);
      }
    }
    /** gets the lists of posts from the Google spreadsheet
    * @param {HTMLElement} $list A jQuery reference to the post list (div)
    */
    function getPostList($list) {
      "use strict";
      $.ajax({
        url: "https://spreadsheets.google.com/feeds/list/1_fhQCe0wAmLs0FCOUDn4HZ8eyDq6QHcvQngF7n4e96I/default/public/values?alt=json-in-script",
        data: { format: "json"},
        dataType: 'jsonp'
      })
      .done(function (responseObject) {
        console.log("success");
        console.log(responseObject);
        var posts = responseObject.feed.entry;
        loadPostList($list, posts);
      })
      .fail(function () {
        console.log("error during get request");
      })
      .always(function () {
        console.log("get request completed");
      });
    }
    var $postList = $('.current-post-list');
    var $postForm = $('.create-post-form');
    $postForm.find("[type='submit']").on("click", {$form: $postForm}, sendNewPost);
    getPostList($postList);
});
