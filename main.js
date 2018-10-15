function afterLoad(){

  var img = $('<img>');
  img.attr("src", "https://api.jquery.com/jquery-wp-content/themes/jquery/content/donate.png");

  $('body').append(img);

}

$( document ).ready( afterLoad );
