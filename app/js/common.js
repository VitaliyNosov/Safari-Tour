$(function() {

// carusel one

	var carusel1 = $('.owl-carousel');
	carusel1.owlCarousel({
		items: 1,
		dots: false

	});
	// Go to the next item
	$('#customNextBtn').click(function () {
		console.log('dcdcdcs');
		carusel1.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('#customPrevBtn').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		carusel1.trigger('prev.owl.carousel', [300]);
	})

// ui tab and select custome

	$("#tabs").tabs();

	$("#speed").selectmenu();

// open close windows info

	$('#block-info').fadeOut();

	var gool = 0;
						
	$('#map-two').on('click', function () {
		if (gool == 0) {
			$('#block-info').fadeIn();
			gool = 1;
		}
		else {			
			$('#block-info').fadeOut();
			gool = 0;
		}
	});

});


