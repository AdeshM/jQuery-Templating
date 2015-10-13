// App Specific Javascript Methods
// @author: Adesh M
$(document).ready(function(){

	// set nav tab
	$('ul.nav.navbar-nav li').on('click', function(){
		$('ul.nav.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	})

	// #c - Changes background color every 5 seconds using the colors
	var footerColor	= Array('white', 'blue', 'yellow','green');
	var selColor = 0;
	(function animateFooter() {
		if (selColor >= footerColor.length) selColor = 0;
		$('footer.footer').css({'background-color': footerColor[selColor++]});
		setTimeout(animateFooter, 500);
	})();


});	// document.ready