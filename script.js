$(document).ready(function(){
   $('#up-btn').click(function() {
    	$('#player').animate({top: "-=30px"}, 'fast');
    });
    $('#down-btn').click(function() {
    	$('#player').animate({top: "+=30px"}, 'fast');
    });
    $('#left-btn').click(function() {
    	$('#player').animate({left: "-=30px"}, 'fast');
    });
    $('#right-btn').click(function() {
    	$('#player').animate({left: "+=30px"}, 'fast');
    });
    $('#in-btn').click(function() {
    	$('#player').fadeIn('slow');
    });
    $('#out-btn').click(function() {
    	$('#player').fadeOut('slow');
    });
    
});
