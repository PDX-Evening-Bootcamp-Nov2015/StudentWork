window.onload = function(){
    //cookie functionality for name
    var user = document.cookie.split("=")[1];
    var name = $(".tagline").text("develop something, " + user.toUpperCase()).html();
    
    //create all the images
    //loop through the number of files to create images with event listeners.
    var fileNum;
    for (var i=1; i<60; i += 1){
        if (i <= 9 ){
            fileNum = "0" + i;
        } else {
            fileNum = i;
        }
        var fileName = "images/pdxcg_" + fileNum + ".jpg";
        
        // create each image and assign attributes
        var imgNew = new Image();
        $(imgNew).addClass('gallery');
        $(imgNew).attr('src', fileName);
        $('#gallery').append(imgNew);
    };
    //wrap each image in an LI tag
    $('img').wrap('<li></li>');

    //click to show the lightbox
    $("img").bind("click", function(event){
        //set the class on the lightbox for all to see
        console.log($('#image_show').children().children());
        $('#image_show').children().children().attr('src', event.target.src);
        $('#image_show').attr('class', 'display_img'); 
        
    });

    //click to close the lightbox, if not clicked on image
    $("#image_show").bind("click", function(event){
        if (event.target.id === "image_show") {
            $("#image_show").attr('class', 'display_none');
        }; 
    });

};
