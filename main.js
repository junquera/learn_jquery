function afterLoad(){

  var img = $('<img>');
  img.attr("src", "https://api.jquery.com/jquery-wp-content/themes/jquery/content/donate.png");

  $('body').append(img);

}

function saluda(){
  alert("Hola");
}

// $( document ).ready( afterLoad );
$( window ).on("click", saluda);
