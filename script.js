$(document).ready(function(){
	$('#up-bth').click(function)(){
		$('#player').animate({top:"-=60px"}, 'fast');
	});
	$('#down-bth').click(function (){
		$('#player').animate(top:"+=60px"}, 'fast');
	});
	$('#left-bth').click(function (){
		$('#player').animate({left:"-=60px"}, 'fast');
	});
	$('#right-bth').click(function (){
		$('#player').animate({left:"+=60px"}, 'fast');
	});
	$('#in-bth').click(function (){
		$('#player').fadeIn ('slow');
	});
	$('#out-bth').click(function (){
		$('#player').fadeOut ('slow');
	});
	$('#player').hover(function (){
		$('#player').effect('bounce', {times:5}, 700);
	});
	$('#player').click(function (){
		$('#player').effect('explode');
	});
});
