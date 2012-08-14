$(document).ready(function() {
	var a=Math.random()*(90-40)+40;
	var b=Math.random()*(70-40)+40;
	var c=Math.floor(Math.random()*(360-90)+90);

	$('div.slTow  a').animate({
		"margin-top":b+'px',
		"margin-left":a+'px',
		'-moz-transform':'rotate('+c+'deg)',
		opacity:'0.5'

	});
});
