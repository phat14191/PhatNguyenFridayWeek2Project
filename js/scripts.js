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
// last part

$(function() {
  $(document).ready(function() {
  $("#survey-form").submit(function(event) {
    var track2 = $("select#expect").val();
    var gender = $("select#gender").val();

    if ((gender === 'male') && (track2 === 'C#/.Net')) {
    alert ("Welcome to C#/.Net");
  }
    else if (
    ((gender === 'female') && (track2 === 'PHP/Drupal')) ||
    ((gender === 'female') && (track2 === 'Java/Amdroid'))
  ) {
    alert ("Welcome to PHP/Drupal");
  }
    else if (
    ((gender != 'female') && (track2 === 'PHP/Drupal')) ||
    ((gender != 'female') && (track2 === 'Java/Amdroid'))
  ){
    alert ("Welcome to Coding");
}

    event.preventDefault();
  });
});
});
