$(document).ready(function(){
 // put your code here
 
//$(".theButton").click(function(){
//  $("#panel .container").siblings().hide();
//});
 
// $(".container").on("click", function(){
//     $(this).css("display", "none");
// });


//$(".theButton").mouseenter(function(){
//	$(this).addClass("makeBlack");
//});

//$(".theButton").mouseout(function(){
//	$(this).removeClass("makeBlack");
//});

 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text( col);

});

//$(".theButton").on("click", function(){
//	$  ("#panel .container").siblings().fadeTo(1000, .5);
//});


//$(".superButton").on("click", function(){
//	$("#panel .container").siblings().fadeTo(1000,1);	
//});



});