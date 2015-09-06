/*------------------------------------------------
| BACKGROUND VIDEO
------------------------------------------------*/
$(document).ready(function() {
	$('body').vide('vids/wedding.mp4', {
		volume: .5,
		playbackRate: 1,
		muted: false,
		loop: true,
		autoplay: true,
		position: '50% 50%', // Similar to the CSS `background-position` property.
		posterType: 'none', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
		resizing: false // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
	});
	
	$('body>div').eq(0).css('position','fixed');
});
/*----------------------------------------------*/