$(document).ready(function() {

	$('.m-optcorz__coly-center input').val('1');

	$('.m-style__item').hover(function() {
		var stand = $(this).children('.m-style__img').attr('src');
		$(this).children().children('.m-style__img').attr('src' ,'img/jeens/1-active.png');
	}, function() {
		$(this).children().children('.m-style__img').attr('src' ,'img/jeens/1.png')
	});

	$('.bx-filter-parameters-box-title .bx-filter-title').on('click', function() {
		$('.smartfilter').slideToogle();
		$(this).toogleClass('bx-filter-title-active');
	});

	$('.b-prods__varcolor-item-1').on('click', function() {
		$('.b-prods__varcolor-block-2').hide();
		$('.b-prods__varcolor-block-3').hide();
		$('.b-prods__varcolor-block-1').show();
	});
	$('.b-prods__varcolor-item-2').on('click', function() {
		$('.b-prods__varcolor-block-1').hide();
		$('.b-prods__varcolor-block-3').hide();
		$('.b-prods__varcolor-block-2').show();
	});
	$('.b-prods__varcolor-item-3').on('click', function() {
		$('.b-prods__varcolor-block-1').hide();
		$('.b-prods__varcolor-block-2').hide();
		$('.b-prods__varcolor-block-3').show();
	});

	/*выпадающее меню*/
	if ($(window).width() > 991) {
		$('.l1').on('click', function() {
			$('.mobsubnav').hide();
			$('.l2').parent().removeClass('nav__item-active');
			$('.l3').parent().removeClass('nav__item-active');
			$('.l4').parent().removeClass('nav__item-active');
			$('.l5').parent().removeClass('nav__item-active');
			$('.l6').parent().removeClass('nav__item-active');
			$(this).parent().toggleClass('nav__item-active');
			$('.m2').addClass('hidden');
			$('.m3').addClass('hidden');
			$('.m4').addClass('hidden');
			$('.m5').addClass('hidden');
			$('.m6').addClass('hidden');
			$('.m1').toggleClass('hidden');
			return false;
		});
		$('.l2').on('click', function() {
			$('.mobsubnav').hide();
			$('.l1').parent().removeClass('nav__item-active');
			$('.l3').parent().removeClass('nav__item-active');
			$('.l4').parent().removeClass('nav__item-active');
			$('.l5').parent().removeClass('nav__item-active');
			$('.l6').parent().removeClass('nav__item-active');
			$(this).parent().toggleClass('nav__item-active');
			$('.m1').addClass('hidden');
			$('.m3').addClass('hidden');
			$('.m4').addClass('hidden');
			$('.m5').addClass('hidden');
			$('.m6').addClass('hidden');
			$('.m2').toggleClass('hidden');
			return false;
		});
		$('.l3').on('click', function() {
			$('.mobsubnav-big').hide();
			$('.l1').parent().removeClass('nav__item-active');
			$('.l2').parent().removeClass('nav__item-active');
			$('.l4').parent().removeClass('nav__item-active');
			$('.l5').parent().removeClass('nav__item-active');
			$('.l6').parent().removeClass('nav__item-active');
			$(this).parent().toggleClass('nav__item-active');
			$('.m1').addClass('hidden');
			$('.m2').addClass('hidden');
			$('.m4').addClass('hidden');
			$('.m5').addClass('hidden');
			$('.m6').addClass('hidden');
			$(this).parent().children('.mobsubnav').stop(false, true).toggle();
			return false;
		});
		$('.l4').on('click', function() {
			$('.mobsubnav-little').hide();
			$('.l1').parent().removeClass('nav__item-active');
			$('.l2').parent().removeClass('nav__item-active');
			$('.l3').parent().removeClass('nav__item-active');
			$('.l5').parent().removeClass('nav__item-active');
			$('.l6').parent().removeClass('nav__item-active');
			$(this).parent().toggleClass('nav__item-active');
			$('.m1').addClass('hidden');
			$('.m2').addClass('hidden');
			$('.m3').addClass('hidden');
			$('.m5').addClass('hidden');
			$('.m6').addClass('hidden');
			$(this).parent().children('.mobsubnav').stop(false, true).toggle();
			return false;
		});
		$('.l5').on('click', function() {
			$('.mobsubnav').hide();
			$('.l1').parent().removeClass('nav__item-active');
			$('.l2').parent().removeClass('nav__item-active');
			$('.l3').parent().removeClass('nav__item-active');
			$('.l4').parent().removeClass('nav__item-active');
			$('.l6').parent().removeClass('nav__item-active');
			$(this).parent().toggleClass('nav__item-active');
			$('.m1').addClass('hidden');
			$('.m2').addClass('hidden');
			$('.m3').addClass('hidden');
			$('.m4').addClass('hidden');
			$('.m6').addClass('hidden');
			$('.m5').toggleClass('hidden');
			return false;
		});
		$('.l6').on('click', function() {
			$('.mobsubnav').hide();
			$('.l1').parent().removeClass('nav__item-active');
			$('.l2').parent().removeClass('nav__item-active');
			$('.l3').parent().removeClass('nav__item-active');
			$('.l4').parent().removeClass('nav__item-active');
			$('.l5').parent().removeClass('nav__item-active');
			$(this).parent().toggleClass('nav__item-active');
			$('.m1').addClass('hidden');
			$('.m2').addClass('hidden');
			$('.m3').addClass('hidden');
			$('.m4').addClass('hidden');
			$('.m5').addClass('hidden');
			$('.m6').toggleClass('hidden');
			return false;
		});
	}
	if ($(window).width() < 991) {
		$('.nav__link').on('click', function() {
			$(this).parent().children('.mobsubnav').stop(false, true).slideToggle();
			return false;
		});
	}


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

	$('.s-title').on('click', function() {
		$(this).removeClass('s-title-menu');
		$('.main__m-line-hd').addClass('hidden');
		$('.main__block').show();
	});

	$('.main__block-close').on('click', function() {
		$(this).parent('.main__block').hide();
		$('.s-title').addClass('s-title-menu');
		$('.s-title').css('cursor', 'pointer');
		$('.main__m-line-hd').removeClass('hidden');
		return false;
	});

	$('.personal__corz').on('click', function() {
		$(this).parent().children('.corzpopup').toggleClass('corzpopup-active');
		$(document).click(function(event) {
			if ($(event.target).closest(".corzpopup").length) return;
				$(".corzpopup").removeClass('corzpopup-active');
				event.stopPropagation();
			});
		return false;
	});

	$('.r-description__razm-description a').on('click', function() {
		$(this).parent().children('.yoursize').show();
		$(document).click(function(event) {
			if ($(event.target).closest(".yoursize").length) return;
				$(".yoursize").hide();
				event.stopPropagation();
			});
		return false;
	});

	$('.m-close').on('click', function() {
		$(this).parent().parent().hide();
		return false;
	});
	$('.r-description__tabs-item > a').on('click', function() {
		$(this).parent().children('.yoursize').show();
		$(document).click(function(event) {
			if ($(event.target).closest(".yoursize").length) return;
				$(".yoursize").hide();
				event.stopPropagation();
			});
		return false;
	})

	if ($(window).width() > 768) {
		$('.m-prods__fprosm a').fancybox();
		
		$('.b-prods__fprosm a').fancybox();
	}

	$('.m-register__input-phone').mask("(999) 999-9999");
});