import $ from "jquery";

class Fade {
	constructor() {
		
		//$('.card').addClass('reveal-item');
		
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();

//figure out what this line does, totally forgot
		$('.hero').css('opacity', $('.hero').height/currentScrollTop);
        $('.hero__overlay').css('opacity',currentScrollTop/$('.hero__overlay').height()-.2);
		
		$('.contact__text-content').css('opacity', (currentScrollTop - ($(".portfolio").height() +400)) * .002);
		 $('.contact__overlay').css('opacity', 1 + (($(".portfolio").height() - currentScrollTop)*.0015));
		 
		 console.log(currentScrollTop);
		 if (currentScrollTop >= 5){
		  $('.hero__text-content, .hero__image, .hero__background--2').css('opacity',$('.hero__overlay').height()/(currentScrollTop*4));
		 }
		 else {
			 $('.hero__text-content, .hero__image, .hero__background--2').css('opacity', 1);
		 }
		 
		 if(currentScrollTop > $('.card').offset().top) {
		$('.card').addClass("reveal-item--is-visible");		 
		 }
		 
		$('.hero__text-content').css({
			'transform' : 'translate(0, '+ currentScrollTop /4 + '%)'
		});
		
		$('.hero__image').css({
			'transform' : 'translate(0, '+ currentScrollTop /20 + '%)'
		});
		
		
			$('.hero__background--left').css({
			'transform' : 'translate(0, '+ currentScrollTop /20 + '%)'
		});
		$('.hero__background--right').css({
			'transform' : 'translate(0, '+ currentScrollTop /20 + '%)'
		});
		//$('.hero__foreground').css({ 'transform' : 'scale(currentScrollTop / 40 + '%)'
	});
	}
}

export default Fade;