
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

var i=0;//star index
var images =[];
var time= 3000; //tiempo en milisegundos
// image list
images[0]="../img/fotosJontxu5.jpg";
images[1]="../img/fotosJontxu2.jpg";
images[2]="../img/fotosJontxu3.jpg";
images[3]="../img/fotosJontxu6.jpg";
images[4]="../img/fotosJontxu7.jpg";
images[5]="../img/fotosJontxu8.jpg";
images[6]="../img/fotosJontxu9.jpg";
images[7]="../img/fotosJontxu10.jpg";
images[8]="../img/fotosJontxu11.jpg";
images[9]="../img/fotosJontxu12.jpg";

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