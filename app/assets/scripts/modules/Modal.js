import $ from "jquery";

class Modal {
	constructor() {
	$.ajaxSetup ({cache: true});
	this.openModalButton = $(".open-modal");
	this.modal = $(".modal");
	this.resumeContainer = $(".modal__resume");
	this.closeModalButton = $(".modal__close");
	this.body = $("body");
	this.resume = "/assets/ajax/resume.html";
	this.transitionLayer = $(".modal__transition-layer");
	this.backgroundLayer = $(".modal__bg-layer");
	this.currentScrollTop = $(window).scrollTop();
	this.events();
	}
	
	
	
	events() {
		
	//clicking the open modal button
	this.openModalButton.click(this.openModal.bind(this));
	
	//clicking the x close modal button
	this.closeModalButton.click(this.closeModal.bind(this));
	
	//user pushes any key
	 $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
		console.log("esc pressed");
      this.closeModal();
	  this.body.removeClass("no-scrolling");
    }
  }
	
	openModal() {
		this.transitionLayer.addClass("modal__transition-layer--is-visible");
		this.backgroundLayer.removeClass("modal__bg-layer--closing");
		this.backgroundLayer.addClass("modal__bg-layer--opening");
		this.body.addClass("no-scrolling");
		this.modal.addClass("modal--is-visible");
		this.resumeContainer.load(this.resume);
	}
	
	closeModal() {
			this.backgroundLayer.removeClass("modal__bg-layer--opening");
			//window.scrollTo(0, 0);
			
			//makes "painting exit" animation, then makes parent div invisible
			this.backgroundLayer.addClass("modal__bg-layer--closing", function(){
			this.transitionLayer.removeClass("modal__transition-layer--is-visible");
			});
			
		this.modal.removeClass("modal--is-visible");
		this.body.removeClass("no-scrolling");
		
	}
}

export default Modal;