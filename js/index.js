
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

var i=0;//star index
var images =[];
var time= 3000; //tiempo en milisegundos
// image list
images[0]="../img/fotosJontxu1.jpg";
images[1]="../img/fotosJontxu2.jpg";
images[2]="../img/fotosJontxu3.jpg";  
images[3]="../img/fotosJontxu4.jpg";
images[4]="../img/fotosJontxu5.jpg";

//create function

function changeImage(){
    document.slide.src = images[i];
    if (i<images.length -1) {
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()",time);
}
window.onload =changeImage;

 /* $(function($){

    $("form").submit(function(event){

        event.preventDefault();
        $.ajax({
            url: "https://formspree.io/joncostasmusic@gmail.com",
            method: "POST",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#message").val(),
            },
            dataType: "json"
          }).done(function(){
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
            alertify.success('message sent');
          }).fail(function(){
            alertify.error('Ups! try again');
          });
    });
 });  */