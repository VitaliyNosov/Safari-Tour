$(function() {

// menu mobile 

	$('.menu-icon').click(function () {
		$('.menu-content').slideToggle(500);
	});
	$(window).resize(function () {
		if ($(window).width() > 500) {
			$('.menu-content').removeAttr('style');
		}
	});


// slider one

	var carusel1 = $('.owl-carousel');
	carusel1.owlCarousel({
		items: 1,
		dots: true,
		autoplay: true

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

// slider two 

	var carusel2 = $('.owl-carousel');
	carusel2.owlCarousel({
		items: 1

	});



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

// mobile version

	var gools = 0;

	$('#map-twos').on('click', function () {
		if (gools == 0) {
			$('#block-info').fadeIn();
			gools = 1;
		}
		else {
			$('#block-info').fadeOut();
			gools = 0;
		}
	});

	// custome scrollbar

		$('.map-block-content').overlayScrollbars({
			sizeAutoCapable: false,
			resize: "vertical"
			

		});

	// popup

		$(".item").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});



	

});


