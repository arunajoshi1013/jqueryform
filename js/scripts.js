$(document).ready(function() {
  $("form").submit(function(event) {
    var beverageInput = $("#beverage").val();
    var sizeInput = $("input:radio[name=size]:checked").val();
    var test = $("#myinput").val();
    alert("You ordered a " + sizeInput + " " + beverageInput + ".");
    event.preventDefault();
  });
});
