$(document).ready(function(event) {
  $("#cnetm").click(function() {
    $("#cnet").slideToggle() ;
    $("h2#cnet").siblings("h2").hide();
});

$("#javam").click(function() {
  $("#java").slideToggle() ;
  $("h2#java").siblings("h2").hide();
});

$("#phpm").click(function() {
  $("#php").slideToggle() ;
  $("h2#php").siblings("h2").hide();
});



//fontend logic//
$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    var nameInput = $("input#name").val();
    var trackInput = $("selec#track").val();
    var hours = $("selec#hour").val();
    var expectInput = $("select#expect").val();
    var colorInput = $("input#color").val();

    $(".name").text(nameInput);
    $(".track").text(trackInput);
    $(".hours").text(hours);
    $(".expect").text(expectInput);
    $(".color").text(colorInput);

    $("#story").show();

    event.preventDefault();
  });
});
});
