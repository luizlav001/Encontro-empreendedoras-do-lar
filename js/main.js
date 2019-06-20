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
