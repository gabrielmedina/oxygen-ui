// nav

var nav = function(){
	var header = $('#header');
	var icon = $('#header-nav');

	icon.click(function(){
		if(header.hasClass('header-active')){
			header.removeClass('header-active');
			icon.removeClass('header-nav-active');
		} else {
			header.addClass('header-active');
			icon.addClass('header-nav-active');
		}
	});
};