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

    console.log("#contador value (val): ", $('#contador').val());
    console.log("#contadiv value (text): ", $('#contadiv').text());

    incrementaContador();

  });


}

$( document ).ready(loadPage);
