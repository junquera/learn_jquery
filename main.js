var incrementValue = 2;

function tablaMult(){

  var contador = Number.parseInt($('#contador').val());

  // Recorremos los factores
  $('#tabla-mult tbody tr').each(function(i, tr){

    var factor = Number.parseInt($( tr ).children().first().text());
    $( tr ).children().last().text(factor * contador);

  });


}
function incrementaContador(){

  var contador = Number.parseInt($('#contador').val());
  $('#contador').val(contador + incrementValue);

  var contadiv = Number.parseInt($('#contadiv').text());
  $('#contadiv').text(contador + incrementValue);

  tablaMult();

}

function loadPage(){

  tablaMult();

  $('#incrementa').on("click", function(){

    console.log("#contador value (val): ", $('#contador').val());
    console.log("#contadiv value (text): ", $('#contadiv').text());

    incrementaContador();

  });


}

$( document ).ready(loadPage);
