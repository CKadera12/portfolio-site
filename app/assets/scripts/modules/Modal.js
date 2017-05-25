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
    }
  }
	
	openModal() {
		this.body.addClass("no-scrolling");
		this.modal.addClass("modal--is-visible");
		this.resumeContainer.load(this.resume);
	}
	
	closeModal() {
		this.modal.removeClass("modal--is-visible");
		this.body.removeClass("no-scrolling");
		
	}
}

export default Modal;