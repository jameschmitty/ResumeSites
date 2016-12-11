(function($){

function handleAjax(data){
	$.each(data, function(){
    var fullName = this.first_name + " " + this.last_name;
	addAccordionElement(fullName, this.email);
   });
}

function addAccordionElement(fullName, email){
	var accordionHeader = $("<h3>").text(fullName);
	var accordionBody = $("<div>");
	var accordionData = $("<p>").text("email: " + email);
	// accordionHeader.append(accordionBody); //So append() won't return a reference to itself. That is, you can't chain this by just doing another .append() and get that behavior. 
	accordionBody.append(accordionData); //You have to kinda put it together piece by piece and then fire it into the original thing.
	$("#accordion").append(accordionHeader); //No guarantee that this will work, though, without seeing what's goin' on.
	$("#accordion").append(accordionBody);

}

 $(document).ready(function(){
  $("#add-order").button().on("click",function(){
  	alert("You have added an order");
  	var newName = $("#name").val();
  	var newEmail = $("#email").val();
  	addAccordionElement(newName, newEmail);
  	$("#accordion").accordion('refresh');
  });

  $.ajax({
  url: "MOCK_DATA.json",
  method: "GET",
  dataType: "json",
  contentType: "application/json",
  success: function(data){
  	handleAjax(data);
  	$( "#accordion" ).accordion();
  }
 });

 });
}(jQuery));