$(document).ready(function() {
	/*------------------------------------------------
	| Bounce photo
	------------------------------------------------*/
	var bounce = new Bounce();
	bounce.rotate({
		from: 270,
		to: 0,
		duration: 3000,
	});
	bounce.applyTo($('.bounce_photo')).then(function() { 
	  // console.log("Animation Complete"); 
	});
});