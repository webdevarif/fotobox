(function ($) {
	"use strict";

	/*=============================================
		=    		 Preloader			      =
	=============================================*/
	function preloader() {
		$('#preloader').delay(0).fadeOut();
	};

	$(window).on('load', function () {
		preloader();
		mainSlider();
		aosAnimation();
		wowAnimation();
	});


	/*=============================================
		=    		Mobile Menu			      =
	=============================================*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});

	/*=============================================
		=     Circle Progress 				      =
	==============================================*/
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, { accX: 0, accY: -150 });
		});
	}


	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$('.scroll-to-target').removeClass('open');

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$('.scroll-to-target').addClass('open');
		}
	});


	/*=============================================
		=    		 Scroll Up  	         =
	=============================================*/
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}



	/*=============================================
		=    		 Main Slider		      =
	=============================================*/
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow:
				'<button type="button" class="slick-prev"> <i class="fal fa-arrow-left"></i></button>',
			nextArrow:
				'<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
			responsive: [
				{ breakpoint: 1000, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}


	/*=============================================
		=    		Slick Single slider	         =
	=============================================*/
	$(".singeItem-slider").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<button type="button" class="slick-prev"> <i class="fal fa-angle-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
		responsive: [
			{ breakpoint: 1000, settings: { dots: false, arrows: false } }
		]
	});

	/*=============================================
		=    		Slick Regular slider	     =
	=============================================*/
	$(".regular-slider").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/*=============================================
		=    		Slick Regular slider	     =
	=============================================*/
	$('.pricing-slider').slick({
		centerMode: true,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '160px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	/*=============================================
		=    		TESTIMONIALS TAB		     =
	=============================================*/
	$('.tab-a').on("click", function () {
		$(".tab").removeClass('tab-active');
		$(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
	});
	$('.tab-a').on("click", function () {
		$(".tab-a").removeClass('active-a');
		$(this).addClass("active-a");
	});


	/*=============================================
		=    		Top Selling Active		     =
	=============================================*/
	$('.top-selling-active').owlCarousel({
		loop: true,
		margin: 15,
		items: 4,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				center: false,
				nav: false,
			},
			575: {
				items: 2,
				center: false,
				nav: false,
			},
			768: {
				items: 3,
				center: false,
			},
			992: {
				items: 4,
				center: false,
			},
			1200: {
				items: 4
			},
		}
	});


	/*=============================================
		=    		Brand Active		      =
	=============================================*/
	$('.brand-active').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});


	/*=============================================
		=    		Odometer Active  	       =
	=============================================*/
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});


	/*=============================================
		=    		Magnific Popup		      =
	=============================================*/
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	/*=============================================
		=    		Isotope	Active  	      =
	=============================================*/
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			}
		});
		// filter items on button click
		$('.portfolio-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

	});
	//for menu active class
	$('.product-license li').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});


	/*=============================================
		=     Circle Progress 				      =
	==============================================*/
	$('.features-area-group-item').hover(function () {
		$(this).find('.features-area-group-btn').slideToggle(400);
		return false;
	});

	/*=============================================
		=     Menu Scroll Animation			      =
	==============================================*/
	$(".nav-link, .btn").on("click", function (e) {
		e.preventDefault();
		var hash = this.hash;
		var target = $('body').attr('data-offset');
		var position = $(hash).offset().top - target + 1;
		// Animate
		$("html").animate({
			scrollTop: position
		}, 1000);
	});

	/*=============================================
		=     Contact Form Open				      =
	==============================================*/
	$('.contact-triger').on("click", function () {
		$('#contactForm').show(400);
	});

	/*=============================================
		=    		 Aos Active  	         =
	=============================================*/
	function aosAnimation() {
		AOS.init({
			duration: 1000,
			mirror: true,
			once: true,
			disable: 'mobile',
		});
	}

	/*=============================================
		=    		 Wow Active  	         =
	=============================================*/
	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}


})(jQuery);

$(document).ready(function () {
	$('.nav-link').on('click', function () {
		navbarToggler = $("button.navbar-toggler"); //Target Toggler Button
		navbarTogglerArea = navbarToggler.attr('aria-expanded');

		$('.navbar-collapse.collapse').removeClass('show');
		if (navbarTogglerArea == 'true') {
			navbarToggler.attr('aria-expanded', 'false');
		} else {
			navbarToggler.attr('aria-expanded', 'true');
		}
	});
});