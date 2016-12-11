(function($){
 //Asynchronous Javascript And XML

 $(document).ready(function(){
  $("#fancyMenu").menu();

  $.ajax({
  url: "MOCK_DATA.json", //Glorified file directory
  method: "GET", // <- That is an HTTP GET request, this is how this entire thing works.
  dataType: "json",
  contentType: "application/json",
  success: function(data){
   $.each(data, function(){
    var fullName = this.first_name + " " + this.last_name;
    $("#fancyMenu").append($("<li>").text(fullName));
   });
  }
 });
 });
}(jQuery));












/*$(function(){

  var $orders = $('#orders');
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url:'/api/order.json',
    success: function(data) {
      $.each(data, function(i, order) {
        $orders.append('<li>my order</li>');
      });
    }
  })
})*/