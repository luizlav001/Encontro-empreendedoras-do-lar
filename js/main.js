$(window).on("scroll", function(){
	var distanciaDoTopo = $(window).scrollTop();

	if (distanciaDoTopo > 300 ) {
		distanciaDoTopo = 300
	}

	$("#header_shadow").css("top", (distanciaDoTopo / 10) + "px")
})

var opcoesSR = {
	delay: 300,
	duartion: 1500,
	origin: 'bottom',
	distance: '50px',
	viewOffset: {
		bottom: 240
	}
}

ScrollReveal().reveal('#scroll-teste', opcoesSR)
ScrollReveal().reveal('.feature', opcoesSR)

$(document).ready(function() {
	$("#myCarousel").on("slide.bs.carousel", function(e) {
	  var $e = $(e.relatedTarget);
	  var idx = $e.index();
	  var itemsPerSlide = 3;
	  var totalItems = $(".carousel-item").length;
  
	  if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
		  // append slides to end
		  if (e.direction == "left") {
			$(".carousel-item")
			  .eq(i)
			  .appendTo(".carousel-inner");
		  } else {
			$(".carousel-item")
			  .eq(0)
			  .appendTo($(this).find(".carousel-inner"));
		  }
		}
	  }
	});
  });
  
