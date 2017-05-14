import $ from "jquery";

class Project {
constructor(element) { 
	this.clickElement = element;
	this.portfolio = $(".gallery");
	this.project = $(".project");
	this.heading = $(".portfolio__header");
	this.events();
}

events() { 
this.clickElement.click(this.toggleTheMenu.bind(this));	
}

toggleTheMenu() {
	this.heading.toggleClass("project__close");
	this.project.toggleClass("project--is-visible");
	this.portfolio.toggleClass("gallery--is-visible");
}
} 

export default Project;