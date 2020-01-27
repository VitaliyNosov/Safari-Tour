$(function() {

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

	// custome scrollbar

	$(function () {
		//The passed argument has to be at least a empty object or a object with your desired options
		// $("body").overlayScrollbars({
		// 	sizeAutoCapable: false,
		// 	resize: "vertical"
			
		// });

		// custome scrollbar 2
		$('.map-block-content').overlayScrollbars({
			sizeAutoCapable: false,
			resize: "vertical"
			

		});

	});

	

	
	

});
