$(document).ready(function(){
    
	$('.sliders').owlCarousel({
		items:1,
		autoplay:true,
		loop: true,
		nav:true,
		navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"]
	});
/* 	  var dot = $('.sliders .owl-dot');
dot.each(function() {
	var index = $(this).index() + 1;
if(index < 10){
	$(this).html('').append(index);
 }else{
    $(this).html(index);
 }
});
 */

	
});