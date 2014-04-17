$(document).ready(function(){
    $('#up-btn').click(function() {
    	$('#player').animate({top: "-=10px"}, 'fast');
    });
    $('#down-btn').click(function() {
    	$('#player').animate({top: "+=10px"}, 'fast');
    });
    $('#left-btn').click(function() {
    	$('#player').animate({left: "-=10px"}, 'fast');
    });
    $('#right-btn').click(function() {
    	$('#player').animate({left: "+=10px"}, 'fast');
    });
    $('#in-btn').click(function() {
    	$('#player').fadeIn('fast');
    });
    $('#out-btn').click(function() {
    	$('#player').fadeOut('fast');
    });
	 
    $('#player').hover(function (){
	$('#player').effect('bounce', {times:5}, 700);
    });
    $('#player').click(function (){
	$('#player').effect('explode');
    });
});
