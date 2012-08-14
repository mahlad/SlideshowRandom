$(document).ready(function() {
	var a=Math.random()*(90-40)+40;
	var b=Math.random()*(70-40)+40;
	var c=Math.floor(Math.random()*(360-90)+90);

	$('div.slTow  a').animate({
		"top":b+'px',
		"left":a+'px',
		'-moz-transform':'rotate('+c+'deg)'
		
	});
	/*$('div.slTow  a').mouseover(function(){
		$(this).css({
			'z-index':'2';
		});
	});
	$('div.slTow  a').mouseout(function(){
		$(this).css({
			'z-index':'0';
		});
	});
	*/
});
