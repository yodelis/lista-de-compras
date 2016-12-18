$(document).ready(function(e) {
  $("#btnañadir").click(function(event) {
    var elemento = $("#elemento").val();
    if (elemento == "") {
      console.log("El elemento no existe");
    } else {
      $("li:last").after('<li class="list-group-item">' + elemento + '</li>');
      $("#elemento").val('');
    }
    event.preventDefault();
  });

  $("ul").on('click', 'li', function() {
    $(this).toggleClass('active');

    var badge = $(this).children('.badge');
    var contador = parseInt(badge.html());
    badge.html(contador + 1);

  });
});
