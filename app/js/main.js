$(document).ready(function() {
	/*выпадающее меню*/
	$('.l1').on('click', function() {
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m1').toggleClass('hidden');
		return false;
	});
	$('.l2').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m2').toggleClass('hidden');
		return false;
	});
	$('.l3').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m3').toggleClass('hidden');
		return false;
	});
	$('.l4').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m4').toggleClass('hidden');
		return false;
	});
	$('.l5').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m6').addClass('hidden');
		$('.m5').toggleClass('hidden');
		return false;
	});
	$('.l6').on('click', function() {
		$('.m1').addClass('hidden');
		$('.m2').addClass('hidden');
		$('.m3').addClass('hidden');
		$('.m4').addClass('hidden');
		$('.m5').addClass('hidden');
		$('.m6').toggleClass('hidden');
		return false;
	});

	$('.personal__item-mob .personal__link-mob').on('click', function() {
		$('.header__bottom').fadeToggle();
		return false;
	});

	$('.m-style__item').hover(function() {
		$(this).children().children('.m-style__loop').stop(false, true).fadeIn();
	}, function() {
		$(this).children().children('.m-style__loop').stop(false, true).fadeOut();
	});

	$('.cardsliderbtn1').on('click', function() {
		$('.r-description__color-item').removeClass('r-description__color-item-active');
		$(this).addClass('r-description__color-item-active');
		$('.m-prods__l-slider').hide();
		$('.cardslider1').show();
	});

	$('.cardsliderbtn2').on('click', function() {
		$('.r-description__color-item').removeClass('r-description__color-item-active');
		$(this).addClass('r-description__color-item-active');
		$('.m-prods__l-slider').hide();
		$('.cardslider2').show();
	});

	$('.cardsliderbtn3').on('click', function() {
		$('.r-description__color-item').removeClass('r-description__color-item-active');
		$(this).addClass('r-description__color-item-active');
		$('.m-prods__l-slider').hide();
		$('.cardslider3').show();
	});

	$('.cardsliderbtn4').on('click', function() {
		$('.r-description__color-item').removeClass('r-description__color-item-active');
		$(this).addClass('r-description__color-item-active');
		$('.m-prods__l-slider').hide();
		$('.cardslider4').show();
	});

	$('.m-lcab__history-item').on('click', function() {
		$(this).parent().children('.m-lcab__toogle').css({
			'opacity': '1',
			'z-index': '2'
		})
	});

	$('.m-lcab__close').on('click', function() {
		$('.m-lcab__toogle').css({
			'opacity': '0',
			'z-index': '-999'
		});
	});
});