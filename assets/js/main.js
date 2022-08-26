(function($) {

	var	$window = $(window),
		$body = $('body'),
		$banner = $('#banner'),
		$header = $('#header');
		$logoSite = $('#logo-site');
		$toggle = $('#menuToggle');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		

	// Mobile
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt');$logoSite.removeClass('logo-site');$toggle.removeClass('menuToggle');},
				enter:		function() { $header.addClass('alt');$logoSite.addClass('logo-site'); $toggle.addClass('menuToggle');},
				leave:		function() { $header.removeClass('alt');$logoSite.removeClass('logo-site'); $toggle.removeClass('menuToggle');}
			});

		}

})(jQuery);