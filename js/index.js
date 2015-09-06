$(document).ready(function() {

	/*------------------------------------------------
	| FREEWALL
	------------------------------------------------*/
	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});

	var images = wall.container.find("a");
	images.find("img").load(function() {
		wall.fitWidth();
	});

	$(".filter_label").click(function() {
		$(".filter_label").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});
	/*----------------------------------------------*/

	/*------------------------------------------------
	| MAGNIFIC POPUP
	------------------------------------------------*/
	// $(".gallery a").on('click', function(evt) {
	// 	evt.preventDefault();

	// 	var filter = $('.filter_label').filter(function(){return $(this).hasClass('active').data('filter');
	// 	// var $imgs = $('.gallery a').filter(function(index) {return $(this).data('filter') !== filter}).detach();

	// 	if (filter !== 'all') {
	// 		var imgs = ".gallery a[data-filter='"+filter+"']";
	// 	} else {
	// 		var imgs = ".gallery a";
	// 	}

	// 	$(imgs).magnificPopup({
	// 		type : 'image',
	// 		gallery : {
	// 			enabled : true
	// 		},
	// 		removalDelay: 400,
	// 		mainClass: 'mfp-fade',
	// 		disableOn: function() {
	// 			return true;
	// 		}
	// 	});


	// 	$("button.mfp-arrow").delay(1000).fadeIn();

	// 	// SMOOTH POPUP SLIDE
	// 	$('.mfp-arrow-right, .mfp-arrow-left').on('click', function () {
	// 		$('.mfp-img').hide().fadeIn(1000);
	// 	});
	// });

	$(".gallery a").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 400,
		mainClass: 'mfp-fade',
		disableOn: function() {
			return true;
		}
	}).click(function() {
		$("button.mfp-arrow").delay(1000).fadeIn();

		// SMOOTH POPUP SLIDE
		$('.mfp-arrow-right, .mfp-arrow-left').on('click', function () {
			$('.mfp-img').hide().fadeIn(1000);
		});
	});
	/*----------------------------------------------*/

	$('.fa-times').click();
});