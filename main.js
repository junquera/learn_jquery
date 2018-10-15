
function loadPage(){

  $('#incrementa').on("click", function(){

    console.log("#contador value (val): ", $('#contador').val());
    console.log("#contadiv value (text): ", $('#contadiv').text());

    var contador = $('#contador').val();
    $('#contador').val(contador + 1);

  });

}

$( document ).ready(loadPage);
