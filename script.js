$(document).ready(function(){
   $('#up-btn').click(function() {
    	$('#player').animate({top: "-=60px"}, 'fast');
    });
    $('#down-btn').click(function() {
    	$('#player').animate({top: "+=60px"}, 'fast');
    });
    $('#left-btn').click(function() {
    	$('#player').animate({left: "-=60px"}, 'fast');
    });
    $('#right-btn').click(function() {
    	$('#player').animate({left: "+=60px"}, 'fast');
    });

    $('#in-btn').click(function() {
    	$('#player').fadeIn('slow');
    });
    $('#out-btn').click(function() {
    	$('#player').fadeOut('slow');
    });
    $('#player').click(function() {
    	$(this).effect('explode');
    });
});
