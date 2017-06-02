import $ from 'jquery';

class PositionChange {
	constructor() {
		
		this.portfolio = $(".portfolio");
		//$('.card').addClass('reveal-item');
		
		
	this.portfolio.on("click", this.positionChange.bind(this));
	
	}
	positionChange() {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
		if (currentScrollTop > 400) {
			
			$('.project__back').addClass("project__icon--fixed");
		}
	});
	}
	}
	
	export default PositionChange;
		