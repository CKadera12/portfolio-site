import $ from "jquery";

class Fade {
	constructor() {
		
		//$('.card').addClass('reveal-item');
		
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();

//figure out what this line does, totally forgot
		$('.hero').css('opacity', $('.hero').height/currentScrollTop);
        $('.hero__overlay').css('opacity',currentScrollTop/$('.hero__overlay').height()-.2);
		
		//$('.contact__text-content').css('opacity', (currentScrollTop - ($(".portfolio").height() +800)) * .002);
		$('.contact__overlay').css('opacity', 1 + (($(".portfolio").height() - currentScrollTop)*.001));
		 
		 console.log(currentScrollTop);
	
		 
		if(currentScrollTop > 960){
		$('.hero').css('visibility', 'hidden');
		} else {
		$('.hero').css('visibility', 'visible');
		}
		 
		 
		
		/*$('.hero__background--2').css({
			'transform' : 'translate(0, '+ currentScrollTop / 10 + '%)'
		});*/
		
		/*$('.hero__image').css({
			'transform' : 'translate(0, '+ currentScrollTop / 20 + '%)'
		});*/
		//$('.hero__foreground').css({ 'transform' : 'scale(currentScrollTop / 40 + '%)'
	});
	}
}

export default Fade;