$(document).ready(function() {

	/*------------------------------------------------
	| CUSTOM SCROLLBAR
	------------------------------------------------*/
	// $('body').mCustomScrollbar({
	// 	axis:"y",
	// 	theme: "light"
	// });
	/*----------------------------------------------*/

	$(".gallery").css("min-height", $(document).height()*1.1);

	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$(".left_side").toggleClass("active");
	});

	$(".gallery img")
	.lazyload({
		effect : "fadeIn",
		threshold : 1000
	})
	.parent().hover(function() {
		$(".gallery a").css("opacity", ".8");
		$(this).css("opacity", "1");
	}, function() {
		$(".gallery a").css("opacity", "1");
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


	
});

// $(window).load(function() {
// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");
// });


