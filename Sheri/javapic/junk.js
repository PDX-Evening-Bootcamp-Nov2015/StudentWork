/*This works and index.js doesn't. I like index.js better, so over the weekend I plan to combine the best of the two or write
one thats better than either*/
//scroll through images so that we are using numbers 01-60 and starting over, but passing any number that doesn't exist.
window.onload = nextImage;
function nextImage() {
  value = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13','14','15','16','17','18','19','20','21',
  '22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','43','44',
  '45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']

 /*I got this from a google search. Why is setTimeout changing the value if i. Why do I need var x =0?
 this was broke until I added it */
  var x = 0;
  for (var i = 0; i < value.length; i++) {
      setTimeout(function() {
        var changeIt = document.getElementById('jumbotron');
        //when I was passing i in value[], I got undefined
        changeIt.style.backgroundImage="url(images/pdxcg_" + value[x] + ".jpg)";
        x++;
        //interval doesn't work unless it's *i. It does that because the i's are in a queue
      }, 10000 * i);
  }
  //if value not found (false?), move on to next image
// }

}
//make new filename
//
//value is the variable that refers to the 01 - 60 of the images,
//function that sets new image name
//separate function that inserts images into setTimeout
