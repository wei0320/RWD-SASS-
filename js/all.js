jQuery(document).ready(function($) {
	$('.heart a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).addClass('fas');
		$(this).removeClass('far');
	});
	$('.cart-menu li a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});


	/*mobile選單*/
	$('.mobile-m a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.mobile-menu').slideToggle();
	});
});