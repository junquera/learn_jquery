function tablaMult(){

  var contador = Number.parseInt($('#contador').val());

  // Recorremos los factores
  $('#tabla-mult tbody tr').each(function(i, tr){

    var factor = Number.parseInt($( tr ).children().first().text());
    $( tr ).children().last().text(factor * contador);

  });

}

function incrementaContador(){

  $.get('increment.json', function( data ){
    var incrementValue = data.value;

    var contador = Number.parseInt($('#contador').val());
    $('#contador').val(contador + incrementValue);

    tablaMult();

  });


}

function creaTabla(){

  var contador = Number.parseInt($('#contador').val());

  for(var i = 0; i <= 10; i++){
    var fila = $('<tr>');

    var factor = $('<td>' + i + '</td>');
    var valor = $('<td>' + i * contador  + '</td>');

    fila.append(factor);
    fila.append(valor);

    $('#tabla-mult tbody').append(fila);

  }
}

function loadPage(){

  creaTabla();

  $('#incrementa').on("click", function(){

    incrementaContador();

  });


}

$( document ).ready(loadPage);
