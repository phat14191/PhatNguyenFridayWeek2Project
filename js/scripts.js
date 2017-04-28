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



// $(document).ready(function() {
//   $("#cnetm").click(function() {
//     $("cnet").show();
// });
// });
