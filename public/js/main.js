$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		slideshowSpeed: 3000
	});
	var waiting = null;
    function onScroll() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
            $('.logo').attr('src', '../img/teletraan-LogoD.png')
            $('.logo').attr('srcset', '../img/teletraan-LogoD@2x.png')
            waiting = false;
        } else {
            $('#header').removeClass('fixed');
            $('.logo').attr('src', '../img/teletraan-Logo.png')
            $('.logo').attr('srcset', '../img/teletraan-Logo@2x.png')
            waiting = false;
        }
    }
	// Header Scroll
	$(window).on('scroll', function() {
		if (waiting) {
			return
		} else {
			waiting = true;
			onScroll();
		}
	});

    var	nav = $('nav[role="navigation"]');

	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
	
});